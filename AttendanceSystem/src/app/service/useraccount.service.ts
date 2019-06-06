import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export class useraccount{
  constructor(
    public employeeId:string,
    public password:string,
    public type:string
  ){}
}
@Injectable({
  providedIn: 'root'
})
export class UseraccountService {
  private messageSource = new BehaviorSubject("default message");
  currentMessage = this.messageSource.asObservable();

  loggedInStatus = false
  constructor(
   private http:HttpClient
  ) { }

setLoggedIn(value:boolean){
  this.loggedInStatus = value
}   
changeMessage(message: string) {
  this.messageSource.next(message)
}
get isLoggedIn(){
  return this.loggedInStatus
}
  getEmployee(empid: string) {
    this.changeMessage(empid);
    console.log("from user account service");
    return this.http.get<useraccount>('http://localhost:8081/userAccount/findbyempid?employeeId='+empid);
  }
  checkEmployee(empid: string,pass: string) {
    this.changeMessage(empid);
    console.log("FUTURE aPP");
    return this.http.get<Number>('http://localhost:8081/userAccount/checkuser?employeeId='+empid+'&password='+pass);
  }
  createEmployee(employee: useraccount) {
    
       return this.http.post<useraccount>('http://localhost:8081/userAccount/adduseraccount/', employee);
   }
  
  // createEmployee(employee: Employee) {
  //   return this.http.post<string>('http://localhost:8081/userAccount/adduseraccount/', employee);
  // }

  updateEmployee(employee: useraccount) {
    return this.http.post<string>('http://localhost:8081/userAccount/updateuser/${id}', employee);
  }

  getEmployeesList() {
    return this.http.get<useraccount[]>('http://localhost:8081/userAccount/findalluseraccounts/');
  }
}
