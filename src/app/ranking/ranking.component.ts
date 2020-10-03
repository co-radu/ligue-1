import { Component, OnInit } from '@angular/core';
import { Competition } from '../shared/models/competition.model';
import { Ranking } from '../shared/models/ranking.model';
import { Team } from '../shared/models/team.model';
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
		this.appServices.getRanking().subscribe(
			(ligue1: Competition) => {
				this.rowsTab = ligue1.standings[0].table.map(
					(teamRank: Ranking) => {
						teamRank.team = (teamRank.team as Team).name.toUpperCase();
						return teamRank;
					}
				);
			}
		);
	}

	onResize(event): void {
		this.windowWidth = event.target.innerWidth;
	}
}