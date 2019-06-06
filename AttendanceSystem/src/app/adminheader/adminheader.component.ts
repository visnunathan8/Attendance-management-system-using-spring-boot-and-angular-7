import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {

  constructor(private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }
  logout(){
    console.log("baddd");
    this.router.navigate(['login'])
  }
  home(){
    this.router.navigate(['admin'])
  }
  hol(){
    this.router.navigate(['adminhol']);
  }
  atten(){
    this.router.navigate(['adminatten'])
  }
  emp(){
    this.router.navigate(['adminemp'])

  }
}
