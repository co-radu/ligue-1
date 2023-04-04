import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { StandingsDescription } from '../../models/season/standings-description';
import { Competition } from '../../models/competition/competition';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = environment.apiUrl;

  getStandingsDescription(): Observable<StandingsDescription> {
    return this.http.get<StandingsDescription>(`${this.apiUrl}/standings`);
  }

  getCurrentMatchday(): Observable<number> {
    return this.http.get<Competition>(`${this.apiUrl}/competition`).pipe(map((compet: Competition) => compet.currentSeason.currentMatchday));
  }
}
