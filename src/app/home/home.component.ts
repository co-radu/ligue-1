import { Component } from '@angular/core';
import { Match } from '../shared/models/matches/match';
import { MatchesService } from '../shared/services/matches/matches.service';
import { SeasonService } from '../shared/services/season/season.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {

	public matchesOfCurrentMatchday!: Match[];
	public currentMatchday!: number;
	public matchDateArray: Date[] = [];

	constructor(
		private seasonService: SeasonService,
		private matchesService: MatchesService,
	) {
		this.seasonService.getCurrentMatchday().subscribe((currentMatchday: number) => {
			this.currentMatchday = currentMatchday;
			this.matchesService.getMatchesOfCurrentMatchday(currentMatchday).subscribe((matchesOfCurrentMatchday: Match[]) => {
				this.matchesOfCurrentMatchday = matchesOfCurrentMatchday;
				this.matchesOfCurrentMatchday.forEach((match: Match) => {
					if (!this.matchDateArray.find((matchDate: Date) => match.utcDate.getDate() === matchDate.getDate() && match.utcDate.getMonth() === matchDate.getMonth())) {
						this.matchDateArray.push(match.utcDate);
					}
				});
			});
		});
	}
}
