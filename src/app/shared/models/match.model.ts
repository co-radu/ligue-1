import { Score } from './score.model';
import { Team } from './team.model';

export class Match {
    awayTeam: Team;
    homeTeam: Team;
    matchday: number;
    score: Score;
    utcDate: Date;
    status: string;
}