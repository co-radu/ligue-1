import { Season } from '../season/season';
import { Team } from '../team/team';
import { Score } from './score';

export interface Match {

    id: number;
    utcDate: Date;
    status: string;
    season: Season;
    matchday: number;
    homeTeam: Team;
    awayTeam: Team;
    score: Score;
}