import { Component, OnInit } from '@angular/core';
import { UseraccountService } from '../service/useraccount.service';
import { AttendancedetailService, attendace } from '../service/attendancedetail.service';

@Component({
  selector: 'app-deptatten',
  templateUrl: './deptatten.component.html',
  styleUrls: ['./deptatten.component.css']
})
export class DeptattenComponent implements OnInit {
  message:string;
  public month=''
  public year=''
  public shift=''
  showActions: boolean = false;  
count:number
  public atten:attendace
public at:object[]

  constructor(private attendance:AttendancedetailService,private userService: UseraccountService) {
    this.userService.currentMessage.subscribe(message => this.message = message)
    //this.attendance.getsorteddept
   }
   
  ngOnInit() {
  }
  submit(){
    this.attendance.getsorteddept(this.message.toString(),this.month,this.shift)
    .subscribe( (data) => {
      console.log(JSON.stringify(data))
      this.at = data as Object[];
      this.showActions=true;
    }
    );
    this.attendance.getcountdeptmonth(this.message.toString(),this.month)
    .subscribe( (data) => {
      console.log("count"+this.message+":"+this.month+":"+JSON.stringify(data))
      
      this.count = Number(data)
      this.showActions=true;

    }
    );
  
  }
}
