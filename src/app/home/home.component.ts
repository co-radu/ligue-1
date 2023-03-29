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

	private getStandingDescriptionSub$: Subscription;
	private getMatchesListDataSub$!: Subscription;
	private subscriptions$: Subscription[] = [];

	public matchesListToggler = false;

	public matchesListData!: Match[];

	public standingTable!: TeamPosition[];
	public standingHeaders: string[] = ['pos', 'club', 'pts', 'j'];

	constructor(
		private seasonService: SeasonService,
		private matchesService: MatchesService,
	) {
		this.getStandingDescriptionSub$ = this.seasonService.getStandingsDescription().subscribe((standingsDesc: StandingsDescription) => {
			const currentMatchday: number = standingsDesc.season.currentMatchday;
			this.standingTable = <TeamPosition[]>standingsDesc.standings.find((standing: Standing) => standing.type === StandingsTypes.total)?.table;
			this.getMatchesListDataSub$ = this.matchesService.getMatchesOfCurrentMatchday(currentMatchday).subscribe((matchesList: Match[]) => {
				this.matchesListData = matchesList;
			});
			this.subscriptions$.push(this.getStandingDescriptionSub$, this.getMatchesListDataSub$);
		});
	}

	toggledBetweenMatchesAndStanding(): void {
		!this.matchesListToggler ? this.matchesListToggler = true : this.matchesListToggler = false;
	}

	ngOnDestroy(): void {
		this.subscriptions$.forEach((subscriptions$: Subscription) => {
			subscriptions$.unsubscribe;
		})
	}
}
