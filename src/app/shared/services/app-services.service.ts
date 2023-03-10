import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
	providedIn: 'root'
})

export class AppServicesService {

	private apiUrl: string = 'https://nmkibqmbxc.execute-api.eu-north-1.amazonaws.com';

	constructor(
		private httpClient: HttpClient,
	) { }

	getStanding(): Observable<any> {
		return this.httpClient.get<any>(`${this.apiUrl}/standings`);
	}

	getMatchDay(): Observable<any> {
		return this.httpClient.get<any>(`${this.apiUrl}/matches`);
	}
}