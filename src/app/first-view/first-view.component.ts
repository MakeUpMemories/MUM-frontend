import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-first-view',
  templateUrl: './first-view.component.html',
  styleUrls: ['./first-view.component.css']
})
export class FirstViewComponent implements OnInit {

  brideImagePath : string;
  
  constructor() {
    this.brideImagePath = '/assets/bride.png'
  }

  ngOnInit() {
  }

  login_view(){

  }

}
