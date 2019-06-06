import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-headeremp',
  templateUrl: './headeremp.component.html',
  styleUrls: ['./headeremp.component.css']
})
export class HeaderempComponent implements OnInit {

  constructor(private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }
  logout(){
    console.log("baddd");
    this.router.navigate(['login'])
  }
  leaverequest(){
    console.log("HELLLLO");
   // this.router.navigate(['./leaveapply'],{relativeTo:this.route});
    this.router.navigate(['leaveapply'])
  }
  home(){
    
    this.router.navigate(['emp'])
  }
  atten(){
    this.router.navigate(['attenemp'])
  }
  not(){
    this.router.navigate(['not']);
  }
  hol(){
    this.router.navigate(['hol']);
  }
}
