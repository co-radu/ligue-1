import { Season } from "../season/season";

export interface Competition {
    id: number,
    name: string,
    code: string,
    type: string,
    emblem: string,
    currentSeason: Season,
}