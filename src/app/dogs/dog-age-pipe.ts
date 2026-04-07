import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dogAge',
})
export class DogAgePipe implements PipeTransform {
  transform(value: number): string {
    return `${value} Yrs.`;
  }
}
