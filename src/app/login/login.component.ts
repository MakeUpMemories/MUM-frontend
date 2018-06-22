import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'username of user';
  password = 'password of user';

  constructor() { }

  ngOnInit() {
    // Good place to put initialization code
  }

}
