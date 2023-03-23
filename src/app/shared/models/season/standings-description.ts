import { Season } from "./season";
import { Standing } from "./standing";

export abstract class StandingsDescription {

    abstract season: Season
    abstract standings: Standing[]
}