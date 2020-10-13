import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Competition } from '../models/competition.model';

@Injectable({
	providedIn: 'root'
})

export class AppServicesService {

	private apiUrl: string = environment.apiUrl;

	constructor(
		private httpClient: HttpClient,
	) { }

	getRanking(): Observable<Competition> {
		return this.httpClient.get<any>(`${this.apiUrl}v2/competitions/2015/standings`, {
			headers: {
				'X-Auth-Token': '833df6e047a745bea114f93017048fa8',
			}
		});
	}

	getMatchDay(): Observable<any> {
		return this.httpClient.get<any>(`${this.apiUrl}/v2/competitions/2015/matches`, {
			headers: {
				'X-Auth-Token': '833df6e047a745bea114f93017048fa8',
			}
		});
	}
}
