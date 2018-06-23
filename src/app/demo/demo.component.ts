import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/_services/auth.service';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  title : string = 'Firebase auth demo';
  user: Object = null;
  token: string = '';

  constructor(private auth: AuthService){}

  ngOnInit(){
    this.auth.user.subscribe(user => this.user = user);
  }

  logout(){
    this.auth.logout();
  }

  getToken(){
    /*
      Return the auth token from BACKEND_API
    */
    this.auth.getAPIToken().then(
      res => {
        console.log(res);
        this.token = JSON.stringify(res);
      },
      err => console.log(err)
    )
  }

}
