import { Component, OnDestroy } from '@angular/core';
import { Match } from '../shared/models/matches/match';
import { MatchesService } from '../shared/services/matches/matches.service';
import { SeasonService } from '../shared/services/season/season.service';
import { StandingsDescription } from '../shared/models/season/standings-description';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {

	private subscription1$!: Subscription;
	private subscription2$!: Subscription;
	private subscription3$: Subscription;
	private subscriptions: Subscription[] = [];

	public matchesOfCurrentMatchday!: Match[];
	public currentMatchday!: number;
	public matchDateArray: Date[] = [];

	public standingsDescription!: StandingsDescription;

	constructor(
		private seasonService: SeasonService,
		private matchesService: MatchesService,
	) {
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
		this.subscription3$ = this.seasonService.getStandingsDescription().subscribe((standingsDescription: StandingsDescription) => {
			this.standingsDescription = standingsDescription;
		});
		this.subscriptions.push(this.subscription1$, this.subscription3$);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe);
	}
}
