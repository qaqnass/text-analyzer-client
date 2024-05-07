import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberComma',
  standalone: true
})
export class NumberCommaPipe implements PipeTransform {
  transform(value: number): string {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
