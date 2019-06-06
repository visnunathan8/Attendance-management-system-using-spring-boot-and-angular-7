import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class holidaydetail{
  constructor(
    public date:number,
    public reason:string,
  ){}
}
@Injectable({
  providedIn: 'root'
})
export class HolidaydetailService {

  constructor(private http:HttpClient) { }
  getholiday() {
    return this.http.get<holidaydetail>('http://localhost:8081/holidaydetail/findallholiday/');
  }
}
