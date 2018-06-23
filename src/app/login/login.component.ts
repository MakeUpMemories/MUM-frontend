import { Component, OnInit, Input, NgModule } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email_of_user: string;
  password: string;

  makeupColors = ['red', 'blue', 'white', 'black']

  constructor() { }

  ngOnInit() {
    // Good place to put initialization code
  }

  onClickMe(form: NgForm){

    // this.username = username;
    console.log(this.email_of_user);
    console.log(this.password);
  }
  // onKey(event: any){}

}
