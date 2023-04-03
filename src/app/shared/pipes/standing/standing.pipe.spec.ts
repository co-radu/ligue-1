import { StandingsSizes } from '../../constants/standings-sizes';
import { TeamPosition } from '../../models/season/team-position';
import { Team } from '../../models/team/team';
import { StandingPipe } from './standing.pipe';

fdescribe('StandingPipe', () => {
  const pipe = new StandingPipe();
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  function randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function randomStringFromLength(length: number): string {
    let randomString = '';
    while (randomString.length < length) {
      randomString += chars.charAt(randomIntFromInterval(0, length));
    }
    return randomString;
  }

  const team: Team = new Team(
    randomIntFromInterval(-1000, 1000),
    randomStringFromLength(30),
    randomStringFromLength(15),
    randomStringFromLength(10),
    randomStringFromLength(30)
  );

  const teamPosition: TeamPosition = new TeamPosition(randomIntFromInterval(-1000, 1000), team, randomIntFromInterval(-1000, 1000), randomIntFromInterval(-1000, 1000), randomIntFromInterval(-1000, 1000), randomIntFromInterval(-1000, 1000), randomIntFromInterval(-1000, 1000), randomIntFromInterval(-1000, 1000), randomIntFromInterval(-1000, 1000), randomIntFromInterval(-1000, 1000), randomStringFromLength(10));

  it('should return an array containing full team positions.', () => {
    expect(pipe.transform([teamPosition, teamPosition])).toEqual([teamPosition, teamPosition]);
  });

  const mediumTeamPosition: TeamPosition = new TeamPosition(randomIntFromInterval(-1000, 1000), team, randomIntFromInterval(-1000, 1000), randomIntFromInterval(-1000, 1000), randomIntFromInterval(-1000, 1000), randomIntFromInterval(-1000, 1000), randomIntFromInterval(-1000, 1000), randomIntFromInterval(-1000, 1000), randomIntFromInterval(-1000, 1000), randomIntFromInterval(-1000, 1000), randomStringFromLength(10));

  function removedItemsOfMediumTeamPosition(): TeamPosition {
    delete mediumTeamPosition.goalsFor;
    delete mediumTeamPosition.goalsAgainst;
    delete mediumTeamPosition.form;
    return mediumTeamPosition;
  }

  it('should return an array containing medium team positions.', () => {
    expect(pipe.transform([mediumTeamPosition, mediumTeamPosition], StandingsSizes.medium)).toEqual(
      [removedItemsOfMediumTeamPosition(), removedItemsOfMediumTeamPosition()]);
  });

  const smallTeamPosition: TeamPosition = new TeamPosition(randomIntFromInterval(-1000, 1000), team, randomIntFromInterval(-1000, 1000), randomIntFromInterval(-1000, 1000), randomIntFromInterval(-1000, 1000), randomIntFromInterval(-1000, 1000), randomIntFromInterval(-1000, 1000), randomIntFromInterval(-1000, 1000), randomIntFromInterval(-1000, 1000), randomIntFromInterval(-1000, 1000), randomStringFromLength(10));

  function removedItemsOfSmallTeamPosition(): TeamPosition {
    delete smallTeamPosition.goalsFor;
    delete smallTeamPosition.goalsAgainst;
    delete smallTeamPosition.form;
    delete smallTeamPosition.won;
    delete smallTeamPosition.draw;
    delete smallTeamPosition.lost;
    delete smallTeamPosition.goalDifference;
    return smallTeamPosition;
  }

  it('should return an array containing small team positions.', () => {
    expect(pipe.transform([smallTeamPosition, smallTeamPosition], StandingsSizes.small)).toEqual([removedItemsOfSmallTeamPosition(), removedItemsOfSmallTeamPosition()]);
  });
});
