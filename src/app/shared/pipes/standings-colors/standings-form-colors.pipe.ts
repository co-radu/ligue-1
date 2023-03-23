import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'standingsFormColors'
})
export class StandingsFormColorsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string[] {
    const standingsFormArray: string[] = value.toLowerCase().split(',').reverse();
    const colorsArray: string[] = [];
    standingsFormArray.forEach((standingForm: string) => {
      if (standingForm === "w") {
        colorsArray.push('#00FF00');
      } else if (standingForm === "d") {
        colorsArray.push('#B3B3B3');
      } else if (standingForm === "l") {
        colorsArray.push('red');
      }
    });
    return colorsArray;
  }

}
