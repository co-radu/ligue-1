import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { StandingsDescription } from '../../models/season/standings-description';
import { Standing } from '../../models/season/standing';

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
