import { Pipe, PipeTransform } from '@angular/core';
import {leavedetail} from './service/leavedetail.service'
@Pipe({
  name: 'leavepipe'
})
export class LeavepipePipe implements PipeTransform {

  transform(empleave : leavedetail[]):leavedetail[]{
    
    if(empleave==null){
      console.log("insde if");
      return empleave;
    }
    // if( !month){
    //   console.log("utyt");
    // }
   // console.log("ty"+month+at+"gh");
   
    return empleave.filter(a =>
       a.leavetype.indexOf("pen")!=-1);
  }

}
