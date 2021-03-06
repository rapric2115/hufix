
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Validators, FormControl} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import Swal from 'sweetalert2';
import { ProductsService } from '../shared/products.service';

export interface QuantA {
  value: string;
  viewValue: string;
}
export interface QuantB {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-testing-form',
  templateUrl: './testing-form.component.html',
  styleUrls: ['./testing-form.component.css']
})
export class TestingFormComponent implements OnInit {


  constructor(
    private _formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private productsService: ProductsService) {
    this.firstFormGroup = new FormGroup({
      firstName: new FormControl()
   });

   this.products$ = this.productsService.getAll();
    console.log(this.products$);
  }

  products$;
  id;

  // mail validation
  email = new FormControl('', [Validators.required, Validators.email]);
  paypalEmail = new FormControl('', [Validators.required, Validators.email]);

   // testing
   show = true;
   processCheck = false;
   open = true;
   check = true;

   // Mobile Price
   val: any;
   mobilePrice: any;
   Stg: any;
   moStorage: any;
   con: any;
   moCondition: any;
   po: any;
   mPower: any;
   im: any;
   mImai: any;
   q: any;
   mQuantity: any;

   hide = true;
   iphone9 = true;
   isLinear = false;

   firstFormGroup: FormGroup;
   secondFormGroup: FormGroup;
   thirdFormGroup: FormGroup;
   fourFormGroup: FormGroup;
   fiveFormGroup: FormGroup;
   sixFormGroup: FormGroup;
   sevenFormGroup: FormGroup;
   eightFormGroup: FormGroup;
   successFormGroup: FormGroup;
   personalData: FormGroup;
   paymentMethod: FormGroup;

   phoneModels: string;
   viewValue: string;
   deviceCondition: string;

   // Personal data Form
   dataName: string;
   dataLastName: string;
   dataAddress: string;
   dataCity: string;
   dataState: string;
   dataZip: number;
   dataEmail: string;
   dataPaypal: string;
   dataPassword: any;
   dataNotes: string;
   termsCond: string;
   payMethod: string;


   quantityA: QuantA[] = [
    {value: 'One-1', viewValue: '1'},
    {value: 'Two-2', viewValue: '2'},
    {value: 'Three-3', viewValue: '3'},
    {value: 'Four-4', viewValue: '4'}
  ];
  quantityB: QuantB[] = [
    {value: 'One-1', viewValue: '1'},
    {value: 'Two-2', viewValue: '2'},
    {value: 'Three-3', viewValue: '3'},
    {value: 'Four-4', viewValue: '4'}
  ];


   favoriteCarrier: string;
   carriers: any[] = [
     { 'id' : 1,
       'name': 'verizon',
       'url': '../../assets/Carrier Logo/Verizon.png',
       'imgUrl': 'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/apple-iphone-xs/gold/Apple-iPhoneXs-Gold-1-3x.jpg',
       'model': 'iPhone Xs'
     },
     { 'id': 2,
     'name': 'AT&T',
     'url': 'data:image/png;base64,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',
     'imgUrl': 'https://www.squashthebeef.com/cmsAdmin/uploads/iphonex.png',
     'model': 'iPhone X'
   },
   {
     'id': 3,
     'name': 'Spring',
     'url': 'data:image/png;base64,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',
     'imgUrl': 'https://www.valuewalk.com/wp-content/uploads/2017/07/iPhone-9-Chips.png',
     'model': 'iPhone 9s'
   },
   {
     'id': 4,
     'name': 'T-Mobile',
     'url': 'data:image/png;base64,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',
     'imgUrl': 'https://www.squashthebeef.com/cmsAdmin/uploads/iphonex.png',
     'model': 'iPhone 9'
   },
   {
     'id': 5,
     'name': 'Unlocked',
     'url': 'data:image/jpeg;base64,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',
     'imgUrl': 'https://static.toiimg.com/photo/57775082/Apple-iPhone-8.jpg',
     'model': 'iPhone 8s'
   }
   ];

   conditions: any[] = [
     {
       'id': 6,
       'condition': 'Excellent',
       'desc': 'Has absolutely no scratches, scuffs or other marks. Looks brand new 100% funtional.',
       show: false
     },
     {
      'id': 7,
      'condition': 'Good',
      'desc': 'Shows light to moderate signs of wear. Contains few light scratches and/ or dents, 100% funtional.',
      show: false
    },
    {
      'id': 8,
      'condition': 'Fair',
      'desc': 'Shows moderate to excessive signs of wear. Contains excessive scratching, major dents, and/ or mild housing demage such as a slightly bent frame, 100% funtional.',
      show: false
    },
    {
      'id': 9,
      'condition': 'Broken',
      'desc': 'Cracks (regardless of size) or broken parts on either screen or body of the item.',
      show: false
    }
   ];


   mobileStorage: string;
   storage: string[] = ['64 GB', '256 GB', '512 GB'];
   mobileCondition: string;
   condition: string[] = ['Excellent', 'Good', 'Fair', 'Broken'];
   devicePowerOnOff: string;
   powerOnOff: string[] = ['Yes', 'No'];
   deviceBadImai: string;
   badImai: string[] = ['Yes', 'No'];
   methodPayment: string;
   payment: string[] = ['Ckeck Payment', 'Paypal', 'Zelle', 'Bitcoin'];
   screenSctch: string;
   screenScratch: string[] = ['Yes', 'No'];
   selectedIndex;

   // Mobile Storage Price
   mStorage(Stg: any) {
    if (Stg === '64 GB') {
      this.moStorage = 15;
    } else if (Stg === '256 GB') {
      this.moStorage = 20;
    } else if (Stg === '512 GB') {
      this.moStorage = 30;
    } else {
      this.moStorage = 0;
    }
   }
   mCondition(con: any) {
     if (con === 'Excellent') {
       this.moCondition = 0;
     } else if (con === 'Good') {
       this.moCondition = 5;
     } else if (con === 'Fair') {
       this.moCondition = 10;
     } else if (con === 'Broken') {
       this.moCondition = 20;
     }
   }
   moPower(po: any) {
      if (po === 'Yes') {
        this.mPower = 0;
      } else if (po === 'No') {
        this.mPower = 10;
      }
   }

   moImai(im: any) {
    if (im === 'Yes') {
      this.mImai = 0;
    } else if (im === 'No') {
      this.mImai = 50;
    }
   }

    // Selector Value change depending mobile
    mPhone(val: any) {
      console.log(val);
      if (val === 'iPhone Xs') {
        this.mobilePrice = 600;
      } else if (val === 'iPhone X') {
        this.mobilePrice = 500;
      } else if (val === 'iPhone 9s') {
        this.mobilePrice = 450;
      } else if (val === 'iPhone 9' ) {
        this.mobilePrice = 375;
      } else if (val === 'iPhone 8s') {
        this.mobilePrice = 325;
      } else if (val === '') {
        this.mobilePrice = 0;
      }
    }

   quan(q: any) {
    console.log(q);
  }
  setOpen() {
    const so = document.getElementById('collapseTwo').classList;
    so.add('show');
  }
  setOp() {
    const open = document.getElementById('collapseThree').classList;
    open.add('show');
  }
  ss() {
    const x = document.getElementById('collapsePower').classList;
    x.add('show');
    const y = document.getElementById('collapseCondition').classList;
    y.remove('show');
  }
  powerOO() {
    const p = document.getElementById('collapseImai').classList;
    p.add('show');
    const c = document.getElementById('collapsePower').classList;
    c.remove('show');
  }
  ima() {
    const im = document.getElementById('collapseCheckout').classList;
    im.add('show');
    const ima = document.getElementById('collapseImai').classList;
    ima.remove('show');
  }

  getErrorMesPaypal() {
    return this.paypalEmail.hasError('required') ? 'You must enter a value' :
      this.paypalEmail.hasError('paypalEmail') ? 'Not a valid email' :
       '';
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter your Paypal email' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  success() {
    setTimeout( () => {
       Swal.fire('Your Order has been place', 'successfully', 'success');
    }, 2000);
 }

 /* Getting only on first Conditions */

 ngOnInit() {
   this.firstFormGroup = this._formBuilder.group({
     firstCtrl: ['', Validators.required],
     mobileCarrier: ['', Validators.required],
     storage: ['', Validators.required],
     condition: ['', Validators.required],
     screenSc: ['', Validators.required],
     powerOnOff: ['', Validators.required],
     imai: ['', Validators.required],
     deviceQuantity: ['', Validators.required],
     QuantityA: ['', Validators.required],
     QuantityB: ['', Validators.required],
     name: ['', Validators.required],
     lastname: ['', Validators.required],
     payMethod: ['', Validators.required],
     Password: ['', Validators.required]
   });

    this.secondFormGroup = this._formBuilder.group({
     mobileCarrier: ['', Validators.required]
   });
   this.thirdFormGroup = this._formBuilder.group({
     storage: ['', Validators.required]
   });
   this.fourFormGroup = this._formBuilder.group({
     condition: ['', Validators.required],
     screenSc: ['', Validators.required]
   });
   this.fiveFormGroup = this._formBuilder.group({
     powerOnOff: ['', Validators.required]
   });
   this.sixFormGroup = this._formBuilder.group({
     imai: ['', Validators.required]
   });
   this.sevenFormGroup = this._formBuilder.group({
     deviceQuantity: ['', Validators.required]
   });
   this.sevenFormGroup = this._formBuilder.group({
     QuantityA: ['', Validators.required]
   });
   this.sevenFormGroup = this._formBuilder.group({
     QuantityB: ['', Validators.required]
   });
   this.eightFormGroup = this._formBuilder.group({
     name: ['', Validators.required]
   });
   this.eightFormGroup = this._formBuilder.group({
     lastname: ['', Validators.required]
   });
   this.eightFormGroup = this._formBuilder.group({
     payMethod: ['', Validators.required]
   });
   this.personalData = this._formBuilder.group({
      dataFirstName: ['', Validators.required],
      dataLastName: ['', Validators.required],
      dataAddress: ['', Validators.required],
      dataCity: ['', Validators.required],
      dataState: ['', Validators.required],
      dataZip: ['', Validators.required],
      dataEmail: ['', Validators.required],
      dataPaypal: ['', Validators.required],
      password: ['', Validators.required],
      dataNotes: ['', Validators.required]
    });
    this.paymentMethod = this._formBuilder.group({
      payMethod: ['', Validators.required],
      termsCond: ['', Validators.required]
    });
 }

 openSnackBar(message: string, action: string) {
   this.snackBar.open(message, action, {
     duration: 2000,
   });
 }

 test(product) {
   console.log(product);
 }


 supdate(product) {
   if (this.id) { this.productsService.savePro(this.id, product);
   } else {
   this.productsService.create(product);
   }
 }
 save(product) {
  this.productsService.create(product);
 }
}
