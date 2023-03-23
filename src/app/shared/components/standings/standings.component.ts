import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Standing } from '../../models/season/standing';
import { StandingsDescription } from '../../models/season/standings-description';
import { TeamPosition } from '../../models/season/team-position';

@Component({
  selector: 'app-standings[standingsDescription]',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnChanges {

  @Input() standingsDescription!: StandingsDescription;

  @Input() type: string = "TOTAL"; // 3 Types are possibles: "TOTAL", "HOME" and "AWAY".

  @Input() standingSize: string = "full"; // 3 Sizes are possibles: "full", "medium" and "small".

  public standingTable?: TeamPosition[];


  ngOnChanges(changes: SimpleChanges): void {
    this.standingsDescription = changes['standingsDescription'].currentValue;
    if (this.standingsDescription) {
      const standingToDisplay: Standing = <Standing>this.standingsDescription.standings.find((standing: Standing) => standing.type === this.type);
      this.standingTable = standingToDisplay.table;
    }
  }
}
