import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth, User as fbUser } from 'firebase/app';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

const BACKEND_AUTH_URL = environment.auth.BACKEND_AUTH_URL;

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public token: string = '';
  private userSubject = new BehaviorSubject<fbUser>(null);
  user = this.userSubject.asObservable();


  constructor(private http : HttpClient,
              private afAuth : AngularFireAuth) { }


  register(user: User){
    // Return promises from firebase API
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password1);
  }

  login(user: User) {
    // TODO: Add login here...
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password1);
  }

  updateUser(data: fbUser){
    this.userSubject.next(data);
    if(data){
      localStorage.setItem("currentUser", JSON.stringify(data));
    }else{
      localStorage.removeItem("currentUser");
    }
  }


  logout(){
    this.afAuth.auth.signOut();
    // this.userSubject.next(null);
  }

  getUIDToken(){
    /*
      Get firebase UIDToken
    */
    var user = this.afAuth.auth.currentUser;
    if(user == null){
      console.error('Not logged in...');
      return null;
    }
    return user.getIdToken(true);
  }


  async getAPIToken(){
    /*
      Get Auth Token from BACKEND_API.
    */
    var uidtoken = await this.getUIDToken();
    return this.http.post(BACKEND_AUTH_URL, uidtoken).toPromise();
  }


}
