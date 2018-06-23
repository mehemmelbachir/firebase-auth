import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './_models/user';
import { AuthService } from './_services/auth.service';
import { environment } from '../../environments/environment';

const myErrors = environment.auth.errors;
const success_url = environment.auth.SUCCESS_URL;


@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  rForm : FormGroup;
  email: string = '';
  password1: string = '';
  password2: string = '';
  emailAlert: string = myErrors.email;
  password1Alert: string = myErrors.password1;
  password2Alert: string = '';
  nonFieldErrors: string = '';
  loading: boolean = false;
  loggedIn: boolean = false;

  user : User;

  constructor(private fb : FormBuilder,
              private router: Router,
              private auth : AuthService) { }

  ngOnInit() {
    this.createForm();
    this.user = new User();
    this.auth.user.subscribe(res => {
      res? this.loggedIn = true : this.loggedIn = false;
    })
  }


  createForm(){
    this.rForm = this.fb.group({
      'email' : [null, Validators.compose([Validators.required,
                                           Validators.email])],
      'password1' : [null, Validators.compose([Validators.required,
                                               Validators.minLength(8)])],
      'password2' : [null, Validators.required]
    })
  }




  submit(post){
    this.loading = true;
    this.user.email = post.email;
    this.user.password1 = post.password1;
    this.user.password2 = post.password2;

    if(!this.user.passwordMatche()){
      this.password2Alert = 'Le mot de passe ne correspond pas';
      return false;
    }

    this.auth.register(this.user).then(
      resolve => {
        this.handleSuccess();
      },
      reject => {
        this.nonFieldErrors = this.getError(reject.code, reject.message);
        console.error(reject.code, reject.message);
        this.loading = false;
      }
    );

    return true;
  }// END:submit


  // Return error from firebase backend or from custom messages from 'environment'
  getError(code: string, message: string) : string {
    return (code in myErrors) ? myErrors[code] : message;
  }

  handleSuccess(){
    this.router.navigate([success_url]);
  }

}
