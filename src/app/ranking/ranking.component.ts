import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Ranking } from '../shared/models/season/standing';
import { Team } from '../shared/models/team/team';
import { AppServicesService } from '../shared/services/app-services.service';

@Component({
	selector: 'app-ranking',
	templateUrl: './ranking.component.html',
	styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

	public headersTab: string[] = ['position', 'club', 'joués', 'points', 'victoires', 'nuls', 'défaites', 'buts incrits', 'buts pris', 'différence'];
	public mobileHeadersTab: string[] = ['pos', 'club', 'j', 'pts', 'diff'];
	public indexTab: string[] = ['position', 'team', 'playedGames', 'points', 'won', 'draw', 'lost', 'goalsFor', 'goalsAgainst', 'goalDifference'];
	public rowsTab: Ranking[];
	public windowWidth: number = window.innerWidth;

	constructor(
		private appServices: AppServicesService,
	) { }

	ngOnInit(): void {
		HomeComponent.ranking.subscribe(
			(ranking: Ranking[]) => {
				if (ranking === null) {
					this.appServices.getStanding().subscribe(
						(apiRes) => {
							HomeComponent.ranking.next(apiRes.standings[0].table);
						}
					);
				} else {
					this.rowsTab = ranking.map(
						(teamRank: Ranking) => {
							if (typeof (teamRank.team) !== 'string') {
								teamRank.team = (teamRank.team as Team).name.toUpperCase();
							}
							return teamRank
						}
					);
				}
			}
		);
		setInterval(
			() => {
				this.appServices.getStanding().subscribe(
					(apiRes) => {
						HomeComponent.ranking.next(apiRes.standings[0].table);
					}
				);
			}, 300000
		);
	}

	onResize(event): void {
		this.windowWidth = event.target.innerWidth;
	}
}