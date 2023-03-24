import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StandingsTypes } from '../shared/constants/standings-types';
import { Match } from '../shared/models/matches/match';
import { Standing } from '../shared/models/season/standing';
import { StandingsDescription } from '../shared/models/season/standings-description';
import { TeamPosition } from '../shared/models/season/team-position';
import { MatchesService } from '../shared/services/matches/matches.service';
import { SeasonService } from '../shared/services/season/season.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {

	private sub1$: Subscription;
	private subscription2$!: Subscription;
	private subscriptions: Subscription[] = [];

	public matchesOfCurrentMatchday!: Match[];
	public currentMatchday!: number;
	public matchDateArray: Date[] = [];

	public standingTable!: TeamPosition[];

	constructor(
		private seasonService: SeasonService,
		private matchesService: MatchesService,
	) {
		this.sub1$ = this.seasonService.getStandingsDescription().subscribe((standingsDesc: StandingsDescription) => {
			this.currentMatchday = standingsDesc.season.currentMatchday;
			this.standingTable = <TeamPosition[]>standingsDesc.standings.find((standing: Standing) => standing.type === StandingsTypes.TOTAL)?.table;
		});
		this.subscriptions.push(this.sub1$);
		/* this.subscription1$ = this.seasonService.getCurrentMatchday().subscribe(
			(currentMatchday: number) => {
				this.currentMatchday = currentMatchday;
				this.subscription2$ = this.matchesService.getMatchesOfCurrentMatchday(currentMatchday).subscribe((matchesOfCurrentMatchday: Match[]) => {
					this.matchesOfCurrentMatchday = matchesOfCurrentMatchday;
					this.matchesOfCurrentMatchday.forEach((match: Match) => {
						if (!this.matchDateArray.find((matchDate: Date) => match.utcDate.getDate() === matchDate.getDate() && match.utcDate.getMonth() === matchDate.getMonth())) {
							this.matchDateArray.push(match.utcDate);
						}
					});
				});
				this.subscriptions.push(this.subscription2$);
			}); */
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe);
	}
}
