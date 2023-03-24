import { Component, Input, OnInit } from '@angular/core';
import { StandingsSizes } from '../../constants/standings-sizes';
import { TeamPosition } from '../../models/season/team-position';

@Component({
  selector: 'app-standings[dataStandingTable]',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {

  @Input() dataStandingTable!: TeamPosition[];

  @Input() standingSize: StandingsSizes = StandingsSizes.full;

  public standingTable?: TeamPosition[];
  public headers!: string[];

  ngOnInit(): void {
    this.headers = Object.keys(this.dataStandingTable[0]).map((header: string) => header = header.replace(/([A-Z])/g, ' $1'));
  }

}
