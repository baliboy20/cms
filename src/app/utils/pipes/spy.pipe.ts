import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spy'
})
export class SpyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('PIPE VALUE', value);
    return value;
  }

}
