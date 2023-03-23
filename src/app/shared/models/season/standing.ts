import { TeamPosition } from "./team-position";

export abstract class Standing {

    abstract stage: string;
    abstract type: string;
    abstract table: TeamPosition[];
}