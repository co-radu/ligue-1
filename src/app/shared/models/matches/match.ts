import { Team } from '../team/team';
import { Score } from './score';

export interface Match {

    id: number;
    utcDate: Date;
    status: string;
    matchday: number;
    homeTeam: Team;
    awayTeam: Team;
    score: Score;
}