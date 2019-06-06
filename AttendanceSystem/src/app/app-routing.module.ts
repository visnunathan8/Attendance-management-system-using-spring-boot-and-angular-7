import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { AuthGuard } from './auth.guard';
import { LeaveapplyComponent } from './leaveapply/leaveapply.component';
import {AttendanceempComponent} from './attendanceemp/attendanceemp.component'
import { NotificationempComponent } from './notificationemp/notificationemp.component';
import { HolidayempComponent } from './holidayemp/holidayemp.component';
import { LeaveapproveComponent } from './leaveapprove/leaveapprove.component';
import { DeptattenComponent } from './deptatten/deptatten.component';
import { AdminattenComponent } from './adminatten/adminatten.component';
import { AdminholidayComponent } from './adminholiday/adminholiday.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { AdminempComponent } from './adminemp/adminemp.component';
export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'leaveapply', component: LeaveapplyComponent, canActivate:[AuthGuard] },
    { path: 'attenemp', component: AttendanceempComponent ,canActivate:[AuthGuard]},
    { path: 'not', component: NotificationempComponent,canActivate:[AuthGuard] },
    { path: 'hol', component: HolidayempComponent,canActivate:[AuthGuard] },
    { path: 'deptatten', component: DeptattenComponent,canActivate:[AuthGuard] },
    { path: 'approve', component: LeaveapproveComponent,canActivate:[AuthGuard] },
    { path: 'adminhol', component: AdminholidayComponent,canActivate:[AuthGuard] },
    { path: 'viewemp', component: ViewemployeeComponent,canActivate:[AuthGuard] },
    { path: 'adminemp', component: AdminempComponent,canActivate:[AuthGuard] },

    { path: 'adminatten', component: AdminattenComponent },
    { 
      path: 'login', 
      component: LoginComponent,
      canActivate:[AuthGuard]
   },
    {
      path: 'admin',
      component: AdminComponent,
      canActivate:[AuthGuard]
     /* children:[
        { path: 'createemployee', component: LoginComponent },
        { path: '', component: LoginComponent },
        { path: 'overallattendance', component: LoginComponent },
      ]*/
     
    },
    {
      path: 'dept',
      component: DepartmentComponent,
      canActivate:[AuthGuard]
      /*children:[
        { path: 'attendance', component: LoginComponent },
        { path: 'leaveaprroval', component: LoginComponent },
        { path: 'overallattendance', component: LoginComponent },
      ]*/
    },
    { 
      path: 'emp',
      component: EmployeeComponent,
      canActivate:[AuthGuard],
      children:[
        { path: 'attendance', component: LoginComponent },
        { path: 'salary', component: LoginComponent },
        { path: 'overallattendance', component: LoginComponent },
        
      ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
