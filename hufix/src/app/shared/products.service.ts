import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  user$: Observable<firebase.User>;
  us: any;
  products$: any[];
  usId: string;
  mobileProd$: any;

  constructor(
    public auth: AuthService,
    private userService: UserService,
    private db: AngularFireDatabase,
    private af: AngularFireAuth
    ) {
    this.user$ = auth.afAuth.authState;
    auth.user$.subscribe(user => {
     if (user) {
      const p = this.us = user;
      this.usId = user.uid;
      console.log(p); }
    });
  }

  create(product) {
    // 'users/' + this.us.uid + 'products/'
    this.db.list('users/' + this.us.uid + '/products').push(product);
  }
  uDetails(product) {
    this.db.list('users/' + this.us.uid + '/details').push(product);
  }

  savePro(productId, product) {
    this.db.object('/details/' + productId ).update(product);
  }

  getAll() {
    return this.db.list(`/user/`).snapshotChanges().subscribe(prod => {
      // this.products$ = prod;
      prod.forEach(action => {
        console.log(action.type);
        console.log(action.key);
        console.log(action.payload.val());
        this.usId = action.key;
        this.mobileProd$ = action.payload.val();
      });
    });
  }
}
