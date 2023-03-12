import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Standing } from '../../models/season/standing';
import { StandingsDescription } from '../../models/season/standings-description';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = environment.apiUrl;

  getStandingsDescription(): Observable<StandingsDescription> {
    return this.http.get<StandingsDescription>(`${this.apiUrl}/standings`);
  }

  getGlobalStanding(): Observable<Standing> {
    return this.getStandingsDescription().pipe(map((standingsDescrition: StandingsDescription) => <Standing>standingsDescrition.standings.find((standing: Standing) => { standing.type === "TOTAL" })));
  }

  getCurrentMatchday(): Observable<number> {
    return this.getStandingsDescription().pipe(map((standingsDescription: StandingsDescription) => <number>standingsDescription.season.currentMatchday));
  }
}
