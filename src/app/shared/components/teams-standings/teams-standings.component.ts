import { Component, Input, OnInit } from '@angular/core';
import { TeamPosition } from '../../models/season/team-position';

@Component({
  selector: 'app-teams-standings[dataStandingTable][width]',
  templateUrl: './teams-standings.component.html',
  styleUrls: ['./teams-standings.component.scss']
})
export class TeamsStandingsComponent implements OnInit {

  @Input() dataStandingTable!: TeamPosition[];

  @Input() headers: string[] = [];

  @Input() width = '400px';

  ngOnInit(): void {
    if (this.headers.length < 1) {
      this.headers = Object.keys(this.dataStandingTable[0]).map((header: string) => header = header.replace(/([A-Z])/g, ' $1'));
    }
  }

  shortNameIsActived(): boolean {
    if (parseInt(<string>document.getElementById('table')?.style.width) < 300) {
      return true;
    } else {
      return false;
    }
  }
}
