import { Team } from '../team/team';
import { Score } from './score';

export class Match {

    id: number;
    utcDate: string;
    status: string;
    matchday: number;
    homeTeam: Team;
    awayTeam: Team;
    score: Score;

    constructor(
        id: number,
        utcDate: string,
        status: string,
        matchday: number,
        homeTeam: Team,
        awayTeam: Team,
        score: Score
    ) {
        this.id = id;
        this.utcDate = utcDate;
        this.status = status;
        this.matchday = matchday;
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.score = score;
    }
}