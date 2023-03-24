import { TimeScore } from "./time-score";

export interface Score {

    winner: string;
    duration: string;
    extraTime: TimeScore;
    fullTime: TimeScore;
}