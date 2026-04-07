import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dogWeight',
})
export class DogWeightPipe implements PipeTransform {
  transform(value: number): unknown {
    return `${value} Kgs.`;
  }
}
