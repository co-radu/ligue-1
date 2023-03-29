import { Component, Input, OnInit } from '@angular/core';
import { TeamPosition } from '../../models/season/team-position';

@Component({
  selector: 'app-standings[dataStandingTable]',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {

  @Input() dataStandingTable!: TeamPosition[];

  @Input() headers: string[] = [];

  ngOnInit(): void {
    if (this.headers.length < 1) {
      this.headers = Object.keys(this.dataStandingTable[0]).map((header: string) => header = header.replace(/([A-Z])/g, ' $1'));
    }
  }
}
