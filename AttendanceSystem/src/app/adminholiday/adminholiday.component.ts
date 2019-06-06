import { Component, OnInit } from '@angular/core';
import { HolidaydetailService, holidaydetail } from '../service/holidaydetail.service';

@Component({
  selector: 'app-adminholiday',
  templateUrl: './adminholiday.component.html',
  styleUrls: ['./adminholiday.component.css']
})
export class AdminholidayComponent implements OnInit {
  public hol:holidaydetail

  constructor(private holiday:HolidaydetailService) { 

    this.holiday.getholiday()
    .subscribe( (data) => {
      console.log(JSON.stringify(data))
      
      this.hol = data 
    }
    );
  }

  ngOnInit() {
  }

}
