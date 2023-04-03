import { Team } from "../team/team";

export class TeamPosition {

    position: number;
    team: Team;
    points: number;
    playedGames: number;
    won?: number;
    draw?: number;
    lost?: number;
    goalsFor?: number;
    goalsAgainst?: number;
    goalDifference?: number;
    form?: string;

    constructor(
        position: number,
        team: Team,
        points: number,
        playedGames: number,
        won?: number,
        draw?: number,
        lost?: number,
        goalsFor?: number,
        goalsAgainst?: number,
        goalDifference?: number,
        form?: string,
    ) {
        this.position = position;
        this.team = team;
        this.points = points;
        this.playedGames = playedGames;
        this.won = won;
        this.draw = draw;
        this.lost = lost;
        this.goalsFor = goalsFor;
        this.goalsAgainst = goalsAgainst;
        this.goalDifference = goalDifference;
        this.form = form;
    }
}