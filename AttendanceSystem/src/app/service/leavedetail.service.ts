import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export class leavedetail{
  constructor(
    public employeeId:string,
    public leavereason:string,
    public deptId:string,
    public date:string,
    public fromdate:string,
    public todate:string,
    public leavetype:string,
    public type:string
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class LeavedetailService {
  private messageSource = new BehaviorSubject("default message");
  currentMessage = this.messageSource.asObservable();

  constructor(private http:HttpClient) { }
  changeMessagedept(message: string) {
    this.messageSource.next(message)
  }
  createEmployee(leave: leavedetail) {
    console.log("FREE");
    return this.http.post<leavedetail>('http://localhost:8081/leavedetail/adduserleave/', leave);
}
getEmployee(emp: string) {
  console.log("FREE");
  this.changeMessagedept(emp);
  return this.http.get<leavedetail[]>('http://localhost:8081/leavedetail/findbyempidleave?employeeId='+ emp);
}
getDept(dept: string) {
  console.log("FREE");
  return this.http.get<leavedetail[]>('http://localhost:8081/leavedetail/findbydeptidleave?deptid='+ dept);
}
updatedept(employeeId: string,fromdate: string,leavetype: string) {
  console.log("FREE"+employeeId+"  "+fromdate+"  "+leavetype);
  return this.http.get<string>('http://localhost:8081/leavedetail/updateleave?employeeId='+employeeId+'&fromdate='+fromdate+'&leavetype='+leavetype);
}
}
