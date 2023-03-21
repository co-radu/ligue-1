import { Team } from '../team/team';
import { Score } from './score';

export abstract class Match {

    abstract id: number;
    abstract utcDate: Date;
    abstract status: string;
    abstract matchday: number;
    abstract homeTeam: Team;
    abstract awayTeam: Team;
    abstract score: Score;
}