import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Match } from '../shared/models/matches/match';
import { MatchesService } from '../shared/services/matches/matches.service';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss']
})
export class ResultsPageComponent implements OnDestroy {

  matchesList: Match[] | undefined;
  currentMatchday = 1;
  maximumMatchdayInSeason = 1;

  private allMatchesList: Match[] | undefined;
  private allMatchesInSeasonSub$: Subscription;

  constructor(
    private matchesService: MatchesService) {
    this.allMatchesInSeasonSub$ = this.matchesService.getallMatches().subscribe((allMatches: Match[]) => {
      const allMatchdays: number[] = [];
      allMatches.forEach((match: Match) => { allMatchdays.push(match.matchday) });
      this.maximumMatchdayInSeason = Math.max(...allMatchdays);
      this.allMatchesList = allMatches;
      this.currentMatchday = allMatches[0].season.currentMatchday;
      this.fetchMatchesOfCurrentMatchday();
    });
  }

  fetchMatchesOfCurrentMatchday(): void {
    this.matchesList = this.allMatchesList?.filter((match: Match) => match.matchday === this.currentMatchday);
  }

  ngOnDestroy(): void {
    this.allMatchesInSeasonSub$.unsubscribe();
  }
}
