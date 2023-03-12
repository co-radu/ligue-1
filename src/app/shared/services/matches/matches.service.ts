import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Match } from '../../models/matches/match';
import { map } from 'rxjs/operators';
import { MatchesList } from '../../models/matches/matches-list';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMatchesOfCurrentMatchday(currentMatchday: number): Observable<Match[]> {
    return this.http.get<MatchesList>(`${this.apiUrl}/matches?matchday=${currentMatchday}`).pipe(map((matchesList: MatchesList) => matchesList.matches));
  }
}
