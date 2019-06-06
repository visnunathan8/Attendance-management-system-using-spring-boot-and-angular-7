import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class department{
  constructor(
    public departmentId:string, 
    public departmentName:string, 
    public noOfEmployee:string, 
    public managerId:string 
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class DepartmentdetailService {

  constructor(private http:HttpClient) { }
  findalldepartment(){
    return this.http.get<department[]>("http://localhost:8081/departmentdetail/findalldepartment/");

  }
}
