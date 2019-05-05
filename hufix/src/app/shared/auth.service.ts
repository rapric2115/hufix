import { UserService } from './user.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import 'firebase/database';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;
  errMs: string;
  err: any;

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private db: AngularFireDatabase,
    private userService: UserService
  ) {
    this.user$ = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  onSignUp(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .catch (
      error => console.log(error)
    );
  }

  singIn(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(
      response => {
        this.router.navigate(['/dashboard/userAccount']);
        console.log(response);
       }
    )
    .catch (
      error => this.err = error
    );
    }
}
