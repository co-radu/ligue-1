import { Winners } from "../../constants/winners";
import { TimeScore } from "./time-score";

export interface Score {

    winner: Winners;
    duration: string;
    halfTime: TimeScore;
    fullTime: TimeScore;
}