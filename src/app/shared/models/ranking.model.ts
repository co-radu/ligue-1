import { Team } from './team.model';

export class Ranking {
    goalDifference: number;
    goalsAgainst: number;
    goalsFor: number;
    lost: number;
    playedGames: number;
    points: number;
    position: number;
    team: Team | string;
    won: number;
    draw: number;
}