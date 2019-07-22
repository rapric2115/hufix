import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/products.service';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
  usId: any;
  userId: any;
  product$: any;
  prod$: any;
  key: any;
  name: any;

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

      // en esta seccion se pide a la base de datos la informacion del usuario
      // (mobiles no datos personales)
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

  ngOnInit() {
    const usersRef = firebase.database().ref().child('users');
      const dataUser = usersRef.child('/products');
      usersRef.on('value', snap => {
        this.product$ = snap.val();

        this.prod$ = (this.product$[this.usId].products);
        // console.log(this.prod$);
        this.key = Object.values(this.prod$);
        for (let i in this.key) {
          console.log(i);
          const y = this.key[i];
          this.name = this.key[i].dataFirstName;
          console.log(this.name);
        }
       });
  }

}
