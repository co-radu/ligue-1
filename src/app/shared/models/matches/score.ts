import { TimeScore } from "./time-score";

export class Score {

    winner: string;
    duration: string;
    extraTime: TimeScore;
    fullTime: TimeScore;

    constructor(
        winner: string,
        duration: string,
        extraTime: TimeScore,
        fullTime: TimeScore
    ) {
        this.winner = winner
        this.duration = duration
        this.extraTime = extraTime
        this.fullTime = fullTime
    }
}