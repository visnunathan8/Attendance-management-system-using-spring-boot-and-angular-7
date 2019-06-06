import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class employeedetail{
    constructor(
        public employeeId:string,
        public dob:Number,
        public gender:string,
        public bloodGroup:string,
        public phno:LongRange,
        public address:string,
        public department:string,
        public mailId:string,
        public firstName:string,
        public lastName:string,
        public dateOfJoining:Number,
        public salary:Number,
        public shift:string
    ){}
}
@Injectable({
  providedIn: 'root'
})
export class EmployeedetailService {

  constructor(private http:HttpClient) { }

getEmployee(empid: string,shift: string) {
  console.log("VENAM PLz"+empid);
  console.log("from employee account service"+empid);
  return this.http.get<employeedetail>('http://localhost:8081/employeedetail/findbyempidemployee?employeeid='+empid+'&shift='+shift);
}

//to get emp id based on dept id
getempbydept(dept:string){
  return this.http.get<employeedetail[]>('http://localhost:8081/employeedetail/findbydeptemp?department='+dept);

}

addemployee(emp:employeedetail){
  return this.http.post<string>('http://localhost:8081/employeedetail/addemployee/',emp);

}
//toget dept name
getDeptemployee(empid:string){
  console.log("pop");
  return this.http.get<string>('http://localhost:8081/employeedetail/findbyempdept?employeeid='+empid);

}
}
