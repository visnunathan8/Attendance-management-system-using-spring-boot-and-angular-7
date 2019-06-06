import { Pipe, PipeTransform } from '@angular/core';
import { attendace } from './service/attendancedetail.service';

@Pipe({
  name: 'monthpipe'
})
export class MonthpipePipe implements PipeTransform {

  transform(at : attendace[],month:string):attendace[]{
    console.log("intialy"+at+"fda"+month);
    if(at==null){
      console.log("insde if");
      return at;
    }
    // if( !month){
    //   console.log("utyt");
    // }
    console.log("ty"+month+at+"gh");
   
    return at.filter(a =>
       a.month.indexOf(month)!=-1);
  }

}
