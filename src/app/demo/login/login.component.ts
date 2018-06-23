import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  observeAuthStatus(data){
    if(data){
      console.log(data)
    }else{
      console.log('Logged out')
    }
  }

}
