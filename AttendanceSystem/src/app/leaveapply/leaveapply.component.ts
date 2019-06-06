import { Component, OnInit } from '@angular/core';
import { LeavedetailService, leavedetail } from '../service/leavedetail.service';
import { UseraccountService } from '../service/useraccount.service';
import { EmployeedetailService, employeedetail } from '../service/employeedetail.service';

@Component({
  selector: 'app-leaveapply',
  templateUrl: './leaveapply.component.html',
  styleUrls: ['./leaveapply.component.css']
})
export class LeaveapplyComponent implements OnInit {
  public aleave:leavedetail
  public empleave:leavedetail
  reason=''
  fromdate:string;
  todate:string;
  type=''
  message:string;
  dept:employeedetail
  constructor(private emp:EmployeedetailService,private userService: UseraccountService,private leave:LeavedetailService) { }

  ngOnInit() {
  }
  private submit(){
    this.userService.setLoggedIn(true);

    this.userService.currentMessage.subscribe(message => this.message = message)
    console.log("QWERTY");
    this.emp.getEmployee(this.message,"1")
    .subscribe( (data) => {
      console.log("SOLLU"+JSON.stringify(data))
      
      this.dept = data as employeedetail;
    }
    );
    console.log("ASD"+this.type+"DEIIIIII"+this.dept.department);
    console.log("ANSWER"+this.message);
    this.aleave = new leavedetail(this.message,this.reason,this.dept.department,"",this.fromdate,this.todate,"pen",this.type);

    this.leave.createEmployee(this.aleave)
    .subscribe( (data) => {
      console.log(JSON.stringify(data))
      
      this.empleave = data
    }
    );
    alert("Leave has been requested.Please wait for the approval");
  this.reason=''
  this.fromdate=''
  this.todate=''
  this.type=''
  }
}
