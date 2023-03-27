import { Colors } from '../../constants/colors';
import { StandingsFormColorsPipe } from './standings-form-colors.pipe';

fdescribe('StandingsFormColorsPipe', () => {
  const pipe = new StandingsFormColorsPipe();

  it('should return an array with green color', () => {
    expect(pipe.transform('W' || 'w')).toEqual([Colors.green]);
  });

  it('should return an array with gray color', () => {
    expect(pipe.transform('D' || 'd')).toEqual([Colors.gray]);
  });

  it('should return an array with red color', () => {
    expect(pipe.transform('L' || 'l')).toEqual([Colors.red]);
  });

  it('should return an array with all colors reversed', () => {
    expect(pipe.transform('w,W,d,D,l,L')).toEqual([Colors.red, Colors.red, Colors.gray, Colors.gray, Colors.green, Colors.green]);
  });
});
