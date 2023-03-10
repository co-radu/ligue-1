import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Match } from '../shared/models/match.model';
import { Ranking } from '../shared/models/ranking.model';
import { Team } from '../shared/models/team.model';
import { AppServicesService } from '../shared/services/app-services.service';
import { news } from './news';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	static matches: BehaviorSubject<Match[] | null> = new BehaviorSubject(null);
	static ranking: BehaviorSubject<Ranking[] | null> = new BehaviorSubject(null);
	public headersTab: string[] = ['pos', 'club', 'j', 'pts'];
	public indexTab: string[] = ['position', 'team', 'playedGames', 'points'];
	public rowsTab: Ranking[];
	public matchDay: Match[];
	public resultsModeOn: boolean = true;
	public news: any[] = news;

	constructor(
		private appServices: AppServicesService,
	) { }

	ngOnInit(): void {
		HomeComponent.matches.subscribe(
			(matches: Match[]) => {
				if (matches === null) {
					this.appServices.getMatchDay().subscribe(
						(apiRes) => {
							HomeComponent.matches.next(apiRes.matches);
						}
					);
				} else {
					matches.forEach(
						(match: Match) => {
							if (match.status === 'FINISHED') {
								this.filterMatches(matches, match.matchday);
							}
						}
					);
				}
			}
		);
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
							return teamRank;
						}
					);
				}
			}
		);
		setInterval(
			() => {
				this.appServices.getMatchDay().subscribe(
					(apiRes) => {
						HomeComponent.matches.next(apiRes.matches);
					}
				);
				this.appServices.getStanding().subscribe(
					(apiRes) => {
						HomeComponent.ranking.next(apiRes.standings[0].table);
					}
				);
			}, 300000
		);
	}

	filterMatches(allMatchInSeason: Match[], matchDaySelector: number): void {
		this.matchDay = allMatchInSeason.filter(
			(match: Match) => {
				return match.matchday === matchDaySelector;
			}
		);
	}
}
