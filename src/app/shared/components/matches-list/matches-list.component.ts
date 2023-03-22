import { Component, Input } from '@angular/core';
import { Match } from '../../models/matches/match';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.scss']
})
export class MatchesListComponent {

  @Input() matchesOfCurrentMatchday!: Match[];
  @Input() currentMatchday!: number;
  @Input() matchDateArray!: Date[];

  fetchMatchesOfDate(date: Date): Match[] {
    return this.matchesOfCurrentMatchday.filter((match: Match) => match.utcDate.getDate() === date.getDate() && match.utcDate.getMonth() === date.getMonth());
  }

}
