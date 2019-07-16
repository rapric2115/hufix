import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, snapshotChanges } from 'angularfire2/database';
import { ProductsService } from '../shared/products.service';
import * as firebase from 'firebase/app';

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
  mprod: any;
  items: AngularFireList<Item[]> = null;
  uId: string;
  probando: AngularFireList<any>;
  key: any;
  details: any;
  k: any;
  d: any;
  // datos en pantalla
  cond: any;
  image: any;


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
      const dataUser = usersRef.child('/products');
      usersRef.on('value', snap => {
        this.product$ = snap.val();

        this.prod$ = (this.product$[this.usId].products);
        console.log(this.prod$);
        this.key = Object.values(this.prod$);
        console.log(this.key);
      });

   }

   getItemsList(): AngularFireList<Item[]> {
    if (!this.usId) {return; }
    this.items = this.db.list(`users/${this.usId}/products/${this.key}`);
    // this.eet$ = firebase.database().ref('users/' + this.usId).child('products');
    console.log(this.items);
  }

   getProdId() {
      this.db.object('/users/' + this.usId + '/products/' + this.key )
      .valueChanges().subscribe( h => {
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
        console.log(mobilePro.payload.val()[`products`]);
        this.test$ = mobilePro.payload.val();
        this.mprod = this.test$['products'];
        console.log(this.mprod);
        this.user = this.test$[`products`];
      });
    });

    const usersRef = firebase.database().ref().child('users');
      const dataUser = usersRef.child('/products');
      usersRef.on('value', snap => {
        this.product$ = snap.val();

        this.prod$ = (this.product$[this.usId].products);
        console.log(this.prod$);
        this.key = Object.values(this.prod$);
        console.log(this.key);
      });
   }

   referUser() {
    const data = { [this.usId]: true};
    const members = this.db.object(`users/${this.usId}/members`);
    members.set(data);
   }



}
