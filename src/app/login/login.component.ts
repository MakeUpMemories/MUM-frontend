import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() want_login : boolean;
  username = 'username of user';
  password = 'password of user';

  makeupColors = ['red', 'blue', 'white', 'black']

  constructor() { }

  ngOnInit() {
    // Good place to put initialization code
  }

  onClickMe(){
    // this.username = username;
    console.log("On click is clicked!")
  }
  // onKey(event: any){}

}
