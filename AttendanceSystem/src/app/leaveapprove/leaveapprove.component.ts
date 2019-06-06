import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LeavedetailService, leavedetail } from '../service/leavedetail.service';
import { UseraccountService } from '../service/useraccount.service';
import { AttendancedetailService, attendace } from '../service/attendancedetail.service';

@Component({
  selector: 'app-leaveapprove',
  templateUrl: './leaveapprove.component.html',
  styleUrls: ['./leaveapprove.component.css']
})
export class LeaveapproveComponent implements OnInit {
  public aleave:leavedetail
  public empleave:leavedetail[]
  message:string;
  empid:string;
  fromdate:'';
  todate:'';
  starting:string[];
  ending:string[];
  length:Number;
  dateee:string;
  attendance:attendace
  constructor(private router: Router,private route:ActivatedRoute,private atten:AttendancedetailService,private userService: UseraccountService,private leave:LeavedetailService) {

    
    this.userService.currentMessage.subscribe(message => this.message = message)
    this.leave.getDept(this.message)
    .subscribe( (data) => {
      console.log(JSON.stringify(data))
      
      this.empleave = data as leavedetail[]
    }
    );
   }

  ngOnInit() {
  }
  acc(get:leavedetail){
    this.userService.setLoggedIn(true);

    this.userService.currentMessage.subscribe(message => this.message = message)
    this.leave.updatedept(get.employeeId,get.fromdate,"ACCEPTED")
    .subscribe( (data) => {
      console.log("VENAMM  MACHAAAA"+JSON.stringify(data))
     // this.empleave = data as leavedetail[]
     this.ngOnInit();
    }
    );
this.starting = get.fromdate.split("-");
this.ending = get.todate.split("-");
this.length = Number(this.ending[2])-Number(this.starting[2]);
for(let i =0;i<=this.length;i++){
this.dateee = this.starting[0]+"-"+this.starting[1]+"-"+(Number(this.starting[2])+i).toString();
console.log("EPA SAMY VANDURU PLZ "+this.dateee);
this.attendance = new attendace(get.employeeId,this.starting[1],this.dateee,get.deptId,false,"-","-","1");
this.atten.addatten(this.attendance)
.subscribe((data)=>{
  console.log("SHH>>>>>>"+JSON.stringify(data))
})
}

this.router.navigate(['approve'])
  }
  rej(get:leavedetail){
    this.userService.setLoggedIn(true);

    this.userService.currentMessage.subscribe(message => this.message = message)
    this.leave.updatedept(get.employeeId,get.fromdate,"REJECTED")
    .subscribe( (data) => {
      console.log(JSON.stringify(data))
      this.ngOnInit();
     // this.empleave = data as leavedetail[]
    }
    );

    this.router.navigate(['approve'])
  }
}
