import { StandingsTypes } from "../../constants/standings-types";
import { TeamPosition } from "./team-position";

export interface Standing {

    stage: string;
    type: StandingsTypes;
    table: TeamPosition[];
}