import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  router: string;
  constructor(private _router: Router) { 
    this.router = _router.url;
  }
  ngOnInit(): void {
    console.log(this.router);
  }
  changeRoute(value : string){
    this.router = value ;
    this._router.navigateByUrl('/'+value);
  }

}