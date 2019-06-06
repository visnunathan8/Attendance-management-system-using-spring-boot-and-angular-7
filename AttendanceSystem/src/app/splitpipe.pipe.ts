import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitpipe'
})
export class SplitpipePipe implements PipeTransform {

  transform(value: String): String[] {
    return value.split(',');
  }

}
