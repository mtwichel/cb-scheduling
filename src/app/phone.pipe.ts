import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (value.length === 10) {
      return `(${value.substring(0, 3)}) ${value.substring(3, 6)}-${value.substring(6, 10)}`;
    } else if (value.length === 7) {
      return `${value.substring(0, 3)}-${value.substring(3, 7)}`;
    } else if (value.length === 11) {
      return `+${value.substring(0, 1)} (${value.substring(1, 4)}) ${value.substring(4, 7)}-${value.substring(7, 11)}`;
    } else {
      return value;
    }
  }

}
