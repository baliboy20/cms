import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordSearch'
})
export class WordSearchPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any {
    if (!value) {
      return [];
    }
    const retval =  value.filter((a: any[]) => {
      return args[0] === undefined ? a : a[args[1]].includes(args[0]);
    });
    //console.log('in pope', retval, args[0], args[1]);
    return retval;
  }

}
