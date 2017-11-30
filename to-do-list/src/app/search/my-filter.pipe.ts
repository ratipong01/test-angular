import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

  transform(value: any, filter: string): any {
    if(!value || !filter){
      return value;
    }
    return value.filter(s => s.text.indexOf(filter) !== -1);
  }

}
