import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { useraccount, UseraccountService } from '../service/useraccount.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  employeeId = ''
  password = ''
  invalidLogin = false
  user: useraccount;
  type:Number
  constructor(private userService: UseraccountService,private router: Router,
    private loginservice: AuthenticationService) { }
    //messageemp = this.employeeId;
  ngOnInit() {
  }
  private checkLogin() {
    
    this.user = new useraccount(this.employeeId,this.password,"admin");
    console.log("ASD"+this.employeeId+" "+this.password);
    this.userService.checkEmployee(this.employeeId,this.password)
    .subscribe( (data) => {
      //console.log(JSON.stringify(data))
      
      this.type = data
      console.log("first");
      // console.log(this.employee.employeeId)
     if(this.type==1){
       console.log("SECOND"+this.employeeId);
          if(this.employeeId=="admin"){
              this.router.navigate(['admin'])
              this.userService.setLoggedIn(true);
              return true;
          }else if(this.employeeId=="dept"){
              this.router.navigate(['dept'])
              this.userService.setLoggedIn(true);
              return true;
          }else if(this.employeeId=="emp"){
              console.log("third");
              this.router.navigate(['emp'])
              this.userService.setLoggedIn(true);
              return true;
          }else{
            console.log("fourth");
              this.employeeId=""
              this.password=""
              //this.router.navigate(['emp'])
              alert("ENTER THE CORRECT USERNAME AND PASSWORD :(");
     }
     console.log("fifth");
    }
  }
    );
    // if (this.loginservice.authenticate(this.username, this.password)
    // ) {
    //   this.router.navigate(['./addemployee'])
    //   this.invalidLogin = false
    // } else
    //   this.invalidLogin = true
  }

}
