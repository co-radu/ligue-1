import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Standing } from '../../models/season/standing';
import { StandingsDescription } from '../../models/season/standings-description';

@Component({
  selector: 'app-standings[standingsDescription]',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnChanges {

  @Input() standingsDescription!: StandingsDescription;

  @Input() type: string = "TOTAL";

  public standingToDisplay?: Standing;

  ngOnChanges(changes: SimpleChanges): void {
    this.standingsDescription = changes['standingsDescription'].currentValue;
    if (this.standingsDescription) {
      this.standingToDisplay = this.standingsDescription.standings.find((standing: Standing) => standing.type === this.type);
    }
  }
}
