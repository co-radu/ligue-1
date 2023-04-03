import { Pipe, PipeTransform } from '@angular/core';
import { StandingsSizes } from '../../constants/standings-sizes';
import { TeamPosition } from '../../models/season/team-position';

@Pipe({
  name: 'standing'
})
export class StandingPipe implements PipeTransform {

  transform(standingTable: TeamPosition[], standingSize?: StandingsSizes): TeamPosition[] {
    return standingTable.map((teamPos: TeamPosition) => {
      teamPos = new TeamPosition(teamPos.position, teamPos.team, teamPos.points, teamPos.playedGames, teamPos.won, teamPos.draw, teamPos.lost, teamPos.goalsFor, teamPos.goalsAgainst, teamPos.goalDifference, teamPos.form);
      if (standingSize === StandingsSizes.medium || standingSize === StandingsSizes.small) {
        delete teamPos.goalsAgainst; delete teamPos.goalsFor; delete teamPos.form;
      }
      if (standingSize === StandingsSizes.small) {
        delete teamPos.won; delete teamPos.draw; delete teamPos.lost; delete teamPos.goalDifference;
      }
      return teamPos;
    });

  }
}
