import { Injectable } from '@angular/core';
import {UseraccountService, useraccount} from './useraccount.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public employes:useraccount;
  public employe:useraccount;
  constructor(private useraccountservice: UseraccountService,private router: Router,
    private authService: AuthenticationService) { }

  authenticate(employe) {
    // this.employe.employeeId="test";
    // this.employe.type="test";
    // this.employe.password="test";
    // console.log("DSA"+username+" "+password);
    console.log("from authentication service"+this.employe.employeeId);
    this.useraccountservice.getEmployee(this.employe.employeeId)
    .subscribe(data => this.employes = data);
    //console.log("from authentication service"+this.employes.employeeId);
   /* 
    if (this.employes!=null) {
      console.log("from if");

      if(this.employes.employeeId=='admin'){
        if(this.employes.password==password){
          this.router.navigate(['admin']);
          return true;
        }
      }else if(this.employes.employeeId=='department'){
        if(this.employes.password==password){
          this.router.navigate(['department']);
          return true;
        }
      }else if(this.employes.password==password){
          this.router.navigate(['employee']);
          return true;
      }
    }else{
      console.log("service");
    } 
   */
    this.router.navigate(['login']);
    return false;
  }

}