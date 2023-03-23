import { Team } from "../team/team";

export abstract class TeamPosition {

    abstract position: number;
    abstract team: Team;
    abstract playedGames: number;
    abstract form: string;
    abstract won: number;
    abstract draw: number;
    abstract lost: number;
    abstract points: number;
    abstract goalsFor: number;
    abstract goalsAgainst: number;
    abstract goalDifference: number;
}