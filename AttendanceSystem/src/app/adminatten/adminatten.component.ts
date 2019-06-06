import { Component, OnInit } from '@angular/core';
import { DepartmentdetailService, department } from '../service/departmentdetail.service';
import { AttendancedetailService, attendace } from '../service/attendancedetail.service';
import { UseraccountService } from '../service/useraccount.service';

@Component({
  selector: 'app-adminatten',
  templateUrl: './adminatten.component.html',
  styleUrls: ['./adminatten.component.css']
})
export class AdminattenComponent implements OnInit {
  private de:department
  private depart:department[]
  private month=''
  private year=''
  private atten:attendace
  private department=''
  public at:Object[]
  public shift = ''
  showActions: boolean = false;  
  count:number
  message:string;

  constructor(private userService: UseraccountService,private attendance:AttendancedetailService,private dept:DepartmentdetailService) {

    
    this.dept.findalldepartment()
    .subscribe( (data) => {
      console.log(JSON.stringify(data))
      
      this.depart = data as department[];
      //this.showActions=true;
    }
    );
   }

  ngOnInit() {
  }
submit(){
  this.attendance.getsorteddept(this.department,this.month,this.shift)
  .subscribe( (data) => {
    console.log(JSON.stringify(data))
    this.at = data as Object[];
    this.showActions=true;
  }
  );
  console.log(this.department)
 
    this.attendance.getcountdeptmonth(this.department,this.month)
    .subscribe( (data) => {
      console.log("count"+this.message+":"+this.month+":"+JSON.stringify(data))
      
      this.count = Number(data)
      this.showActions=true;

    }
    );
    this.month=''
    this.year=''
    this.department=''
  }

  
}
