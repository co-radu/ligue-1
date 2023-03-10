import { TeamResults } from './team-results';

export abstract class Standing {

    abstract stage: string;
    abstract type: string;
    abstract table: TeamResults[];
}