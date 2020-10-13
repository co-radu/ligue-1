import { Component, OnInit } from '@angular/core';
import { Match } from '../shared/models/match.model';
import { AppServicesService } from '../shared/services/app-services.service';

@Component({
	selector: 'app-calendar-results',
	templateUrl: './calendar-results.component.html',
	styleUrls: ['./calendar-results.component.scss']
})
export class CalendarResultsComponent implements OnInit {

	public matchDaySelector: number = 1;
	public matchDay: Match[];
	private totalMatchDayInSeason: number;
	private allMatchInSeason: Match[];

	constructor(
		private appServices: AppServicesService,
	) { }

	ngOnInit(): void {
		this.appServices.getMatchDay().subscribe(
			(apiRes) => {
				let totalMatchInSeason: number = apiRes.matches.length;
				this.allMatchInSeason = apiRes.matches;
				this.totalMatchDayInSeason = this.allMatchInSeason[totalMatchInSeason - 1].matchday;
				this.filterMatches();
			}
		);
	}

	filterMatches(): void {
		this.matchDay = this.allMatchInSeason.filter(
			(match: Match) => {
				return match.matchday === this.matchDaySelector;
			}
		);
		console.log(this.matchDay);
	}

	nextMatchDay(): void {
		if (this.matchDaySelector < this.totalMatchDayInSeason) {
			this.matchDaySelector += 1;
			this.filterMatches();
		}
	}

	previousMatchDay(): void {
		if (this.matchDaySelector > 1) {
			this.matchDaySelector -= 1;
			this.filterMatches();
		}
	}
}
