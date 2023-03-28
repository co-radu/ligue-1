import { Component, Input } from '@angular/core';
import { MatchStatus } from '../../constants/match-status';
import { Winners } from '../../constants/winners';
import { Match } from '../../models/matches/match';

@Component({
  selector: 'app-matches-list[matchesListData]',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.scss']
})
export class MatchesListComponent {

  @Input() matchesListData!: Match[];

  public winners: typeof Winners = Winners;

  getMatchesDates(): string[] {
    const matchesDates: string[] = [];
    this.matchesListData.forEach((match: Match) => {
      if (!matchesDates.includes(match.utcDate.toDateString())) {
        matchesDates.push(match.utcDate.toDateString());
      }
    });
    return matchesDates;
  }

  fetchMatchesOfDate(matchesDate: string): Match[] {
    const date: Date = new Date(matchesDate);
    return this.matchesListData.filter((match: Match) => match.utcDate.getDate() === date.getDate() && match.utcDate.getMonth() === date.getMonth());
  }

  isWinner(match: Match, team: Winners): boolean {
    if (match.status === MatchStatus.finished && match.score.winner === team) {
      return true;
    } else {
      return false
    }
  }

  matchIsBegan(match: Match): boolean {
    switch (match.status) {
      case MatchStatus.inPlay: {
        return true;
      }
      case MatchStatus.finished: {
        return true;
      }
      case MatchStatus.paused: {
        return true;
      }
      default: {
        return false;
      }
    }
  }
}
