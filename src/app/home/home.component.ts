import { Component, OnInit } from '@angular/core';
import { SeasonService } from '../shared/services/season/season.service';
import { MatchesService } from '../shared/services/matches/matches.service';
import { Match } from '../shared/models/matches/match';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	public matchesOfCurrentMatchday!: Match[];
	public currentMatchday: Observable<number>;

	constructor(
		private seasonService: SeasonService,
		private matchesService: MatchesService,
	) {
		this.currentMatchday = this.seasonService.getCurrentMatchday();
	}

	ngOnInit(): void {
		this.seasonService.getCurrentMatchday().subscribe((currentMatchday: number) => {
			this.matchesService.getMatchesOfCurrentMatchday(currentMatchday).subscribe((matchesOfCurrentMatchday: Match[]) => {
				this.matchesOfCurrentMatchday = matchesOfCurrentMatchday;
			});
		});
	}

}
