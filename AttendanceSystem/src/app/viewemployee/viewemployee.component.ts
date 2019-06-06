import { Component, OnInit } from '@angular/core';
import { UseraccountService } from '../service/useraccount.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeedetailService, employeedetail } from '../service/employeedetail.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {
 message:string
  public employee:employeedetail;
  public emp:string;
  public shift:string
  public employeename:employeedetail[];
  public show = false
  constructor(private userService: UseraccountService,private router: Router,private route:ActivatedRoute,private employeeservice : EmployeedetailService){
    this.userService.currentMessage.subscribe(message => this.message = message)

    this.employeeservice.getempbydept(this.message)
    .subscribe((data)=>{
     console.log("EMP:"+JSON.stringify(data)) 
   
      this.employeename = data 
    })
  }

  ngOnInit() {
  }
submit(){
  this.userService.setLoggedIn(true);

  this.employeeservice.getEmployee(this.emp,this.shift)
  .subscribe( (data) => {
    console.log(JSON.stringify(data)) 
    this.employee = data
}
  );
  this.show=true;
}
}