import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeedetailService, employeedetail } from '../service/employeedetail.service';
import { UseraccountService } from '../service/useraccount.service';

@Component({
  selector: 'app-employee',
  templateUrl:'employee.component.html',
  styles: ['employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employee:employeedetail;
  name="asd"
  message:string;
  constructor(private userService: UseraccountService,private router: Router,private route:ActivatedRoute,private employeeservice : EmployeedetailService,
  ) {
    console.log("leaveapply");
    this.def();
   }

  ngOnInit() {
  }
check(){
  console.log("leaveapply");
  this.router.navigate(['./leaveapply'],{relativeTo:this.route});
}
def(){
  this.userService.currentMessage.subscribe(message => this.message = message)
  console.log("swamy"+this.message);
  this.employeeservice.getEmployee(this.message,"1")
  .subscribe( (data) => {
    console.log(JSON.stringify(data)) 
    this.employee = data
}


  );
}
}