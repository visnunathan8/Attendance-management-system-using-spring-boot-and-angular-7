import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-headerdept',
  templateUrl: './headerdept.component.html',
  styleUrls: ['./headerdept.component.css']
})
export class HeaderdeptComponent implements OnInit {

  constructor(private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }
  home(){
    this.router.navigate(['dept'])

  }
  appo(){
      this.router.navigate(['approve'])
  }
  logout(){
    this.router.navigate(['login'])
  }
  not(){
   // this.router.navigate(['not']);
  }
  atten(){
    this.router.navigate(['deptatten']);
  }
  emp(){
    this.router.navigate(['viewemp']);
  }
}
