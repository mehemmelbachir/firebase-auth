import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './_models/user';
import { AuthService } from './_services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from 'src/environments/environment';

const myErrors = environment.auth.errors;
// const success_url = environment.auth.SUCCESS_URL;


@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rForm : FormGroup;
  email : string;
  password : string;
  emailAlert : string;
  passwordAlert : string;
  nonFieldErrors : string;
  user : User;
  loading : boolean = false;
  loggedIn : boolean = false;
  // authResult : Object = null;
  token : string = '';

  @Output() signInData : EventEmitter<any> = new EventEmitter();

  constructor(private fb : FormBuilder,
              private auth : AuthService,
              private afAuth : AngularFireAuth,
              private router: Router) { }

  ngOnInit() {
      // Logout when login component is called..
      // this.auth.logout();

      this.user = new User();
      this.createForm();
      this.afAuth.user.subscribe((response) => {
        if(response){
          this.loggedIn = true;
          this.signInData.emit(response);
          this.auth.updateUser(response);
        }else{
          this.signInData.emit(null);
          this.auth.updateUser(null);
          this.loggedIn = false;
        }
      });
  }

  createForm(){
    this.rForm = this.fb.group({
      'email' : ['mehemmel-bachir@hotmail.com', Validators.compose([Validators.required, Validators.email])],
      'password' : ['12345678', Validators.required],
    })
  }

  submit(post){
    this.loading = true;

    this.user.email = post.email;
    this.user.password1 = post.password;

    this.auth.login(this.user).then(
      resolve => {
        console.log('Logged in');
        this.loading = false;
      },
      reject =>{
        // console.log(reject);
        this.nonFieldErrors = this.getError(reject.code, reject.message);
        console.error(reject.code, reject.message);
        this.loading = false;
      }
    )
  }

  // Return error from firebase backend or from custom messages from 'environment'
  getError(code: string, message: string) : string {
    return (code in myErrors) ? myErrors[code] : message;
  }


}
