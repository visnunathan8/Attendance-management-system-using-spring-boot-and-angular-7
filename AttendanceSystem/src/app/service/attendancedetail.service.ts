import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class attendace{
  constructor( 
		public employeeId:string,
		public month:string,
		public date:string,
		public departmentId:string,
		public available:boolean,
		public checkin:string,
    public checkout:string,
    public shift:string
){}
}
@Injectable({
  providedIn: 'root'
})
export class AttendancedetailService {

  constructor(private http:HttpClient) { }

  getattendance(atten:string) {
    console.log("FREE");
    return this.http.get<attendace[]>("http://localhost:8081/attendancedetail/findbyempidatten?employeeid="+ atten);
}
getcountempdeptavail(emp:string,dept:string,avail:Boolean){
  return this.http.get<number>('http://localhost:8081/attendancedetail/findbyEandDandA?employeeid='+emp+'&departmentid='+dept+'&available='+avail);

}
getcountempdept(emp:string,dept:string){
  return this.http.get<attendace[]>('http://localhost:8081/attendancedetail/findbyEandD?employeeid='+emp+'&departmentid='+dept);

}
getcountdeptmonth(dept:string,month:string){
  console.log("EN DA");
  return this.http.get<number>('http://localhost:8081/attendancedetail/findbyDandm?departmentid='+dept+'&month='+month);
}

getcountdeptmonthavail(dept:string,month:string,avail:Boolean){
  return this.http.get<number>('http://localhost:8081/attendancedetail/findbyDandmanda?departmentid='+dept+'&month='+month+'&available='+avail);
}

updateatten(emp:string,avail:Boolean,date:string){
  console.log("SHHHHHHHH......");
  return this.http.get<string>('http://localhost:8081/attendancedetail/updateatten?employeeid='+emp+'&available='+avail+'&date='+date);
}
addatten(atten:attendace){
    return this.http.post<string>('http://localhost:8081/attendancedetail/addatten/',atten);
}
getsorteddept(dept:string,month:string,shift:string){
  return this.http.get<attendace[]>('http://localhost:8081/attendancedetail/sortview?departmentId='+dept+'&month='+month+'&shift='+shift);
}
}
