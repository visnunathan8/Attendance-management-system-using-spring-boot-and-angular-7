import { Component, OnInit } from '@angular/core';
import { UseraccountService } from '../service/useraccount.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeedetailService, employeedetail } from '../service/employeedetail.service';
import { department, DepartmentdetailService } from '../service/departmentdetail.service';

@Component({
  selector: 'app-adminemp',
  templateUrl: './adminemp.component.html',
  styleUrls: ['./adminemp.component.css']
})
export class AdminempComponent implements OnInit {
  private de:department
  private depart:department[]
  public shift=''
  private department=''
  public employee:employeedetail;
  public emp:string;
  public employeename:employeedetail[];
  public show = false
  constructor(private dept:DepartmentdetailService,private userService: UseraccountService,private router: Router,private route:ActivatedRoute,private employeeservice : EmployeedetailService){
    this.dept.findalldepartment()
    .subscribe( (data) => {
      console.log(JSON.stringify(data))
      
      this.depart = data as department[];
      
    }
    );

  }

  ngOnInit() {
  }
  calle(){

   this.employeeservice.getempbydept(this.department)
   .subscribe((data)=>{
     this.employeename = data
   })
  }
  submit(){
    
  
  
    this.employeeservice.getEmployee(this.emp,this.shift)
    .subscribe( (data) => {
      console.log(JSON.stringify(data)) 
      this.employee = data
  }
    );
    this.show=true;
  }
}
