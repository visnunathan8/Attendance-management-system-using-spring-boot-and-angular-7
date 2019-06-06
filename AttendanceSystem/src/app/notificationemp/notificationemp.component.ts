import { Component, OnInit } from '@angular/core';
import { UseraccountService } from '../service/useraccount.service';
import { leavedetail, LeavedetailService } from '../service/leavedetail.service';

@Component({
  selector: 'app-notificationemp',
  templateUrl: './notificationemp.component.html',
  styleUrls: ['./notificationemp.component.css']
})
export class NotificationempComponent implements OnInit {
  message:string;
  public aleave:leavedetail
  public empleave:leavedetail[]
  constructor(private userService: UseraccountService,private leave:LeavedetailService) { 
    this.userService.currentMessage.subscribe(message => this.message = message)
    this.leave.getEmployee(this.message)
    .subscribe( (data) => {
      console.log(JSON.stringify(data))
      
      this.empleave = data as leavedetail[]
    }
    );
  }

  ngOnInit() {
  }

}
