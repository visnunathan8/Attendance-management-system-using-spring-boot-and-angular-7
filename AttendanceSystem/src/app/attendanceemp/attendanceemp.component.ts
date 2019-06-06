import { Component, OnInit } from '@angular/core';
import {attendace, AttendancedetailService} from '../service/attendancedetail.service'
import { UseraccountService } from '../service/useraccount.service';
@Component({
  selector: 'app-attendanceemp',
  templateUrl: './attendanceemp.component.html',
  styleUrls: ['./attendanceemp.component.css']
})
export class AttendanceempComponent implements OnInit {
public atten:attendace
public at:attendace[]
  public month=''
  public year=''
  showActions: boolean = false;  
  message:string;
  constructor(private userService: UseraccountService,private attendance:AttendancedetailService) { }

  ngOnInit() {
  }
  submit(){
    this.userService.currentMessage.subscribe(message => this.message = message)
    //console.log("visnu"+this.message);
    this.attendance.getattendance(this.message.toString())
    .subscribe( (data) => {
      console.log(JSON.stringify(data))
      
      this.at = data as attendace[];
      this.showActions=true;
    }
    );
  this.month=''
  this.year=''
  }
}
