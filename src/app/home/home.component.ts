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
export class HomeComponent {
	standingHeaders: string[] = ['', '', 'pts', 'j'];
	matchesIsActive = false;
	matchesListData: Observable<Match[]>;
	standingTable: Observable<TeamPosition[]>;

	constructor(
		private seasonService: SeasonService,
		private matchesService: MatchesService,
	) {
		this.standingTable = this.seasonService.getStandingsDescription().pipe(
      tap((standingsDesc: StandingsDescription) => {
        const currentMatchDay: number = standingsDesc.season.currentMatchday;
        this.matchesListData = this.matchesService.getMatchesOfCurrentMatchday(currentMatchday);
      }),
      map((standingsDesc: StandingsDescription) => standingsDesc.standings),
      filter((standing: Standing) => standing.type === StandingsTypes.total),
      map((standing: Standing) => standing.table)
		);
	}

	standingActivated(): void {
		this.matchesIsActive = false;
	}
	matchesActivated(): void {
		this.matchesIsActive = true;
	}
}
