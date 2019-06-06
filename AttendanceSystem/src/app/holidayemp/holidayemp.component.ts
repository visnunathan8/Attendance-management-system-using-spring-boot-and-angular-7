import { Component, OnInit } from '@angular/core';
import { HolidaydetailService, holidaydetail } from '../service/holidaydetail.service';

@Component({
  selector: 'app-holidayemp',
  templateUrl: './holidayemp.component.html',
  styleUrls: ['./holidayemp.component.css']
})
export class HolidayempComponent implements OnInit {
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
