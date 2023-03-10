import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Match } from '../shared/models/match.model';
import { AppServicesService } from '../shared/services/app-services.service';

@Component({
	selector: 'app-calendar-results',
	templateUrl: './calendar-results.component.html',
	styleUrls: ['./calendar-results.component.scss']
})
export class CalendarResultsComponent implements OnInit {

	public matchDaySelector: number;
	public matchDay: Match[];
	public windowWidth: number = window.innerWidth;
	private totalMatchDayInSeason: number;

	constructor(
		private appServices: AppServicesService,
	) { }

	ngOnInit(): void {
		HomeComponent.matches.subscribe(
			(matches: Match[]) => {
				console.log(matches)
				if (matches === null) {
					this.appServices.getMatchDay().subscribe(
						(apiRes) => {
							HomeComponent.matches.next(apiRes.matches);
						}
					);
				} else {
					this.totalMatchDayInSeason = matches[matches.length - 1].matchday;
					matches.forEach(
						(match: Match) => {
							if (match.status === 'FINISHED') {
								this.matchDaySelector = match.matchday;
							}
						}
					);
					this.filterMatches();
					console.log(this.matchDay)
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
			}, 300000
		);
	}

	filterMatches(): void {
		HomeComponent.matches.subscribe(
			(matches: Match[]) => {
				this.matchDay = matches.filter(
					(match: Match) => {
						return match.matchday === this.matchDaySelector;
					}
				);
			}
		);
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

	onResize(event): void {
		this.windowWidth = event.target.innerWidth;
	}
}
