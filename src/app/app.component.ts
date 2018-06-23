import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/_services/auth.service';
// import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Firebase auth';

  // constructor(private afAuth: AngularFireAuth, private auth: AuthService){}
  constructor(){}

  ngOnInit(){
  /*  this.afAuth.user.subscribe(user => this.user = user); */
  }

  // logout(){
  //   this.auth.logout();
  // }
  //
  // getToken(){
  //   /*
  //     Return the auth token from BACKEND_API
  //   */
  //   this.auth.getAPIToken().then(
  //     res => {
  //       console.log(res)
  //     },
  //     err => console.log(err)
  //   )
  // }




}
