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

  fetchMatches(matchesList: Observable<MatchesList>): Observable<Match[]> {
    return matchesList.pipe(
      map((matchesList: MatchesList) => matchesList.matches),
      map((matches: Match[]) => matches.map<Match>((match: Match) => {
        match.utcDate = new Date(match.utcDate);
        return match;
      })));
  }

  getallMatches(): Observable<Match[]> {
    return this.fetchMatches(this.http.get<MatchesList>(`${this.apiUrl}/matches`));
  }

  getMatchesOfCurrentMatchday(currentMatchday: number): Observable<Match[]> {
    return this.fetchMatches(this.http.get<MatchesList>(`${this.apiUrl}/matches?matchday=${currentMatchday}`));
  }
}
