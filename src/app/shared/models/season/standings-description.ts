import { Season } from "./season";
import { Standing } from "./standing";

export class StandingsDescription {

    season: Season
    standings: Standing[]

    constructor(season: Season, standings: Standing[]) {
        this.season = season
        this.standings = standings
    }

}