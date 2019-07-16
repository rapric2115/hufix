import { UserService } from './../shared/user.service';
import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user$: Observable<firebase.User>;

  constructor(
    public auth: AuthService,
    private userService: UserService
    ) {
    this.user$ = auth.afAuth.authState;
    auth.user$.subscribe(user => {
     userService.save(user);
     console.log(user);
    });
  }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.auth.onSignUp(email, password);
  }

  signIn(form: NgForm) {
    const email = form.value.emails;
    const password = form.value.passwords;
    this.auth.singIn(email, password);
  }

}
