import { Pipe, PipeTransform } from '@angular/core';
import { Colors } from '../../constants/colors';

@Pipe({
  name: 'standingsFormColors'
})
export class StandingsFormColorsPipe implements PipeTransform {

  transform(formOfTeam: string): unknown[] {
    return formOfTeam.toLowerCase().split(',').reverse().map(
      (formOfTeam: string) => {
        switch (formOfTeam) {
          case "w":
            return Colors.green;
          case "d":
            return Colors.gray;
          case "l":
            return Colors.red;
          default:
            throw new Error('NoMatchFoundError');
        }
      }
    );
  }

}
