import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router
  ) { }

  githubAuth() {
    return this.authLogin(new auth.GithubAuthProvider());
  }

  authLogin(provider) {
    return this.afAuth.auth.signInWithRedirect(provider)
      .then(success => {
        console.log('successfully logged in');
      }).catch(error => {
        console.log(error);
      });
  }

  getAccessToken() {
    let token = null;
    this.afAuth.auth.getRedirectResult()
      .then((result) => {
        token = (result as any).credential.accessToken;
      });
    return token;
  }


  signout() {
    this.afAuth.auth.signOut().then(() => {
      console.log('Sign-out successful');
    }).catch((error) => {
      console.log(error);
    });
  }
}
