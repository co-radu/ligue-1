import { Team } from "../team/team";

export class TeamResults {

    position: number;
    team: Team;
    playedGames: number;
    form: string;
    won: number;
    draw: number;
    lost: number;
    points: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;

    constructor(
        position: number,
        team: Team,
        playedGames: number,
        form: string,
        won: number,
        draw: number,
        lost: number,
        points: number,
        goalsFor: number,
        goalsAgainst: number,
        goalDifference: number
    ) {
        this.position = position
        this.team = team
        this.playedGames = playedGames
        this.form = form
        this.won = won
        this.draw = draw
        this.lost = lost
        this.points = points
        this.goalsFor = goalsFor
        this.goalsAgainst = goalsAgainst
        this.goalDifference = goalDifference
    }
}