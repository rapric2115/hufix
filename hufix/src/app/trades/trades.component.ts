import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, FirebaseListObservable } from 'angularfire2/database';
import { ProductsService } from '../shared/products.service';
import * as firebase from 'firebase/app';
import { map } from 'rxjs/operators';

export class Item {
  body: string;
}

@Component({
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.css']
})

export class TradesComponent implements OnInit {

  eet$;
  product$;
  prod$;
  p: any;
  testing: any;
  usId: any;
  userId: any;
  test$: any;
  user: any;
  items: FirebaseListObservable<Item[]> = null;
  uId: string;
  probando: AngularFireList<any>;

  constructor( private productService: ProductsService,
    private db: AngularFireDatabase) {
       productService.auth.user$.subscribe( us => {
         this.usId = us.uid;
         this.userId = us;
         console.log(us);
         console.log(us.uid);
       });
      // const data = firebase.database().ref('/users/' + userId );
      // console.log('la database se despliega aca ' + data);
      const usersRef = firebase.database().ref().child('users');
      const dataUser = usersRef.child('users');
      usersRef.on('value', snap => {
        this.product$ = snap.val();
        this.prod$ = (this.product$[this.usId].products);
        // console.log(JSON.stringify(this.product$, null, 2));
      });
      dataUser.on('value', snap => {
        console.log(snap.val());
      });

      productService.auth.user$.subscribe( user => {
        this.userId = user.uid;
        const userData = db.database.ref('/users/');
      });

    // this.prod$ = this.getAll();
    // this.product$ = this.getProdId();
    // console.log(this.productService.usId);
   }

   getItemsList(): FirebaseListObservable<Item[]> {
    if (!this.usId) {return; }
    this.items = this.db.list(`users/${this.usId}/products/` );
    this.eet$ = firebase.database().ref('users/' + this.usId).child('products');
    console.log(this.eet$);
  }

   getProdId() {
    return this.db.object('/users/' + this.usId + '/products/' ).valueChanges().subscribe( h => {
      this.testing = (h);
       console.log(this.testing);
    });
   }

   getProd() {
     return this.db.list('/products').valueChanges().subscribe( p => {
        this.prod$ = p;
        console.log(this.prod$);
     });
    }

   getAll() {
    return this.db.list(`/users/`).snapshotChanges().subscribe(prod => {
      // this.products$ = prod;
      prod.forEach(action => {
       // console.log(action.type);

        this.usId = action.key;
        console.log(this.usId);
        console.log(action.payload.val());
        // this.product$ = action.payload.val();
       /* this.usId = action.payload.val();
        console.log(this.usId); */
      });
    });
  }
  ngOnInit() {
     this.db.list(`/users/`).snapshotChanges().subscribe( usPro => {
      usPro.forEach(mobilePro => {
        console.log(mobilePro.payload.val()['products']);
        this.test$ = mobilePro.payload.val();
        console.log(this.test$['products']);

        // console.log(JSON.stringify(this.product$, null, 2));
        this.user = this.test$['products'];
      });
    });
   }

   referUser() {
    const data = { [this.usId]: true};
    const members = this.db.object(`users/${this.usId}/members`);
    members.set(data);
   }



}
