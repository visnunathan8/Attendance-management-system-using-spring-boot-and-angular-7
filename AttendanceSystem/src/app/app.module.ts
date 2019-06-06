import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { AuthGuard } from './auth.guard';
import { LeaveapplyComponent } from './leaveapply/leaveapply.component';
import { HeaderempComponent } from './headeremp/headeremp.component'
import {DatePipe} from '@angular/common';
import { AttendanceempComponent } from './attendanceemp/attendanceemp.component';
import { MonthpipePipe } from './monthpipe.pipe';
import { NotificationempComponent } from './notificationemp/notificationemp.component';
import { HolidayempComponent } from './holidayemp/holidayemp.component';
import { HeaderdeptComponent } from './headerdept/headerdept.component';
import { LeaveapproveComponent } from './leaveapprove/leaveapprove.component';
import { LeavepipePipe } from './leavepipe.pipe';
import { DeptattenComponent } from './deptatten/deptatten.component';
import { AdminattenComponent } from './adminatten/adminatten.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdminholidayComponent } from './adminholiday/adminholiday.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { AdminempComponent } from './adminemp/adminemp.component';
import { SplitpipePipe } from './splitpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    AdminComponent,
    DepartmentComponent,
    EmployeeComponent,
    LeaveapplyComponent,
    HeaderempComponent,
    AttendanceempComponent,
    MonthpipePipe,
    NotificationempComponent,
    HolidayempComponent,
    HeaderdeptComponent,
    LeaveapproveComponent,
    LeavepipePipe,
    DeptattenComponent,
    AdminattenComponent,
    AdminheaderComponent,
    AdminholidayComponent,
    AddemployeeComponent,
    ViewemployeeComponent,
    AdminempComponent,
    SplitpipePipe
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
