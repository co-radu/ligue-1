import { Ranking } from './ranking.model';
import { Team } from './team.model';

export class Competition {
    standings: [{
        table: Ranking[],
    }];
    teams: Team[];
}