
import { Pipe, type PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/hero.interfaces';

@Pipe({
  name: 'heroTextColor',
})
export class HeroTextColorPipe implements PipeTransform {

  transform(value: Color): string {
    return ColorMap[value];
  }
}
