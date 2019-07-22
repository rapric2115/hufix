import {Component, OnInit, ViewChild, Input, HostBinding} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import Swal from 'sweetalert2';
import { ProductsService } from '../shared/products.service';
import { MatStepper } from '@angular/material';
import { Router } from '@angular/router';
import { CommunicationService } from '../communication.service';

// import swal para crear alertas para incremetar la experiencia del usuario (informacion)

// import * as  swal  from 'sweetalert';
// import swal from 'sweetalert';



@Component ({
  selector: 'app-form-details-mobile',
  templateUrl: './form-details-mobile.component.html',
  styleUrls: ['./form-details-mobile.component.css'],
})


export class FormDetailsMobileComponent implements OnInit {


  quant = 'Q1';
  mbModel: any;
  iid: any;
  mobileModel: any[] = [];
  mob: any;
  mid: string[];
  products$;
  id;


  @Input() value: string;



  constructor(
    private _formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private productsService: ProductsService,
    private router: Router,
    private communication: CommunicationService) {
    this.firstFormGroup = new FormGroup({
      firstName: new FormControl()
   });

   this.products$ = this.productsService.getAll();
    // console.log(this.products$);

    this.communication.communication$.subscribe( data => {
      console.log(data);
    });


  }

  @ViewChild('stepper') stepper: MatStepper;

  // mail validation
  email = new FormControl('', [Validators.required, Validators.email]);
  paypalEmail = new FormControl('', [Validators.required, Validators.email]);

   // testing
   show = true;
   processCheck = false;
   open = true;
   check = true;

   // variables para precio Mobile Price
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
   mQuantity: any = 1;
   x: any;

   hide = true;
   iphone9 = true;
   isLinear = false;

   sellProfileForm: FormGroup;
   userProfile: FormGroup;

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
   dataFirstName: string;
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

  // las marcas de las compañias telefonicas aca pueden agregar o modificar
  // logos o/y compañias telefonicas.
  favoriteCarrMobile: string;
   carriers: any[] = [
     {
       'id': 1,
       'name': 'verizon',
       'url': '../../assets/Carrier Logo/Verizon.png'
     },
     { 'id': 2,
     'name': 'AT&T',
     'url': 'data:image/png;base64,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'
   },
   {
     'id': 3,
     'name': 'Sprint',
     'url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Logo_of_Sprint_Nextel.svg/1280px-Logo_of_Sprint_Nextel.svg.png'
   },
   {
     'id': 4,
     'name': 'T-Mobile',
     'url': 'https://cdn.tmobile.com/content/dam/t-mobile/assets/icons/smart-cart-desktop.png'
   },
   {
     'id': 5,
     'name': 'Unlocked',
     'url': '../../assets/icons-img/unlocked.svg'
   }
   ];

  // listado de los Mobiles, faltan los demas telefonos y nota los Id se deben de tomar
  // del listado de Brands en nav-switch en sell device component ts
   favoriteCarrier: string;
   mobiles = [
    {
      parentId : '1',
      imgUrl: '../../assets/deviceBrandModels/IPhone-xr-testing.png',
      model: 'iPhone XR'
    },
     { parentId : '1',
       imgUrl: '../../assets/deviceBrandModels/IPhone-xs-max-testing.png',
       model: 'iPhone XS Max'
     },
     { parentId : '1',
     imgUrl: '../../assets/deviceBrandModels/IPhone-xs-testing.png',
     model: 'iPhone XS'
   },
   {
     parentId: '1',
     imgUrl: '../../assets/deviceBrandModels/IPhone-x-testing.png',
     model: 'iPhone X'
   },
   {
    parentId : '1',
    imgUrl: '../../assets/deviceBrandModels/IPhone-8-Plus-testing.png',
    model: 'iPhone 8 Plus'
  },
  {
    parentId : '1',
    imgUrl: '../../assets/deviceBrandModels/iphone-8-testing.png',
    model: 'iPhone 8'
  },
  {
    parentId : '1',
    imgUrl: '../../assets/deviceBrandModels/IPhone-7-plus-testing.png',
    model: 'iPhone 7 Plus'
  },
   {
     parentId : '1',
     imgUrl: '../../assets/deviceBrandModels/IPhone-7-testing.png',
     model: 'iPhone 7'
   },
   {
    parentId: '1',
    imgUrl: '../../assets/deviceBrandModels/IPhone-SE-testing.png',
    model: 'iPhone SE'
  },
  {
    parentId : '1',
    imgUrl: '../../assets/deviceBrandModels/iphone-6s-Plus-testing.png',
    model: 'iPhone 6s Plus'
  },
   {
     parentId : '1',
     imgUrl: '../../assets/deviceBrandModels/iphone-6s-testing.png',
     model: 'iPhone 6s'
   },
   {
     parentId : '1',
     imgUrl: '../../assets/deviceBrandModels/iphone-6-Plus-testing.png',
     model: 'iPhone 6 Plus'
   },
   {
    parentId : '1',
    imgUrl: '../../assets/deviceBrandModels/iphone-6-testing.png',
    model: 'iPhone 6'
  },
  {
    parentId : '1',
    imgUrl: '../../assets/deviceBrandModels/iphone-5c-testing.png',
    model: 'iPhone 5c'
  },
   {
    parentId : '1',
    imgUrl: '../../assets/deviceBrandModels/IPhone-5s-testing.png',
    model: 'iPhone 5s'
  },
  {
    parentId : '1',
    imgUrl: '../../assets/deviceBrandModels/IPhone-5-testing.png',
    model: 'iPhone 5'
  },
  {
    parentId : '2',
    imgUrl: '../../assets/deviceBrandModels/galaxy-note3.png',
    model: 'Galaxy Note 3'
  },
   {
    parentId : '2',
    imgUrl: '../../assets/deviceBrandModels/galaxy-s3.png',
    model: 'Galaxy S3'
  },
  {
    parentId : '2',
    imgUrl: '../../assets/deviceBrandModels/galaxy-note-edge.png',
    model: 'Galaxy Note Edge'
  },
  {
    parentId : '2',
    imgUrl: '../../assets/deviceBrandModels/galaxy-note4.png',
    model: 'Galaxy Note 4'
  },
  {
    parentId : '2',
    imgUrl: '../../assets/deviceBrandModels/galaxy-s4.png',
    model: 'Galaxy S4'
  },
  {
    parentId : '2',
    imgUrl: '../../assets/deviceBrandModels/galaxy-note5.png',
    model: 'Galaxy Note 5'
  },
  {
    parentId : '2',
    imgUrl: '../../assets/deviceBrandModels/galaxy-s5-Active.png',
    model: 'Galaxy S5 Active'
  },
  {
    parentId : '2',
    imgUrl: '../../assets/deviceBrandModels/galaxy-s5-mini.png',
    model: 'Galaxy S5 mini'
  },
  {
    parentId : '2',
    imgUrl: '../../assets/deviceBrandModels/galaxy-s5.png',
    model: 'Galaxy S5'
  },
  {
    parentId : '2',
    imgUrl: '../../assets/deviceBrandModels/galaxy-s6-edge-plus.png',
    model: 'Galaxy S6 Edge Plus'
  },
  {
    parentId : '2',
    imgUrl: '../../assets/deviceBrandModels/galaxy-s6-edge.png',
    model: 'Galaxy S6 Edge'
  },
  {
    parentId : '2',
    imgUrl: '../../assets/deviceBrandModels/galaxy-s6.png',
    model: 'Galaxy S6'
  },
  {
    parentId : '2',
    imgUrl: '../../assets/deviceBrandModels/galaxy-s7-edge.png',
    model: 'Galaxy S7 Edge'
  },
  {
    parentId : '2',
    imgUrl: '../../assets/deviceBrandModels/galaxy-s7.png',
    model: 'Galaxy S7'
  },
  {
    parentId : '2',
    imgUrl: '../../assets/deviceBrandModels/galaxy-note8.png',
    model: 'Galaxy Note 8'
  },
  {
    parentId : '2',
    imgUrl: '../../assets/deviceBrandModels/galaxy-s8-active.png',
    model: 'Galaxy S8 Active'
  },
  {
    parentId : '2',
    imgUrl: '../../assets/deviceBrandModels/galaxy-s8-plus.png',
    model: 'Galaxy S8 Plus'
  },
  {
    parentId : '2',
    imgUrl: '../../assets/deviceBrandModels/galaxy-s8.png',
    model: 'Galaxy S8'
  },
  {
    parentId : '2',
    imgUrl: '../../assets/deviceBrandModels/galaxy-note9.png',
    model: 'Galaxy Note 9'
  },
  {
    parentId : '2',
    imgUrl: '../../assets/deviceBrandModels/galaxy-s9-plus.png',
    model: 'Galaxy S9 Plus'
  },
  {
    parentId : '2',
    imgUrl: '../../assets/deviceBrandModels/galaxy-s9.png',
    model: 'Galaxy S9'
  },
  {
    parentId : '2',
    imgUrl: '../../assets/deviceBrandModels/galaxy-s10-plus.png',
    model: 'Galaxy S10 lus'
  },
  {
    parentId : '2',
    imgUrl: '../../assets/deviceBrandModels/galaxy-s10.png',
    model: 'Galaxy S10'
  },
  {
    parentId : '2',
    imgUrl: '../../assets/deviceBrandModels/galaxy-s10e.png',
    model: 'Galaxy S10e'
  }
  ,
  {
    parentId : '8',
    imgUrl: '../../assets/deviceBrandModels/LG-G5.png',
    model: 'LG G5'
  },
  {
    parentId : '8',
    imgUrl: '../../assets/deviceBrandModels/LG-G6-Plus.png',
    model: 'LG G6 Plus'
  },
  {
    parentId : '8',
    imgUrl: '../../assets/deviceBrandModels/LG-G6.png',
    model: 'LG G6'
  },
  {
    parentId : '8',
    imgUrl: '../../assets/deviceBrandModels/LG-G7-ThinQ.png',
    model: 'LG G7 ThinQ'
  },
  {
    parentId : '8',
    imgUrl: '../../assets/deviceBrandModels/LG-G8-ThinQ.png',
    model: 'LG G8 ThinQ'
  },
  {
    parentId : '8',
    imgUrl: '../../assets/deviceBrandModels/LG-Stylo-2.png',
    model: 'LG Stylo 2'
  },
  {
    parentId : '8',
    imgUrl: '../../assets/deviceBrandModels/LG-Stylo-3-Plus.png',
    model: 'LG Stylo 3 Plus'
  },
  {
    parentId : '8',
    imgUrl: '../../assets/deviceBrandModels/LG-Stylo-3.png',
    model: 'LG Stylo 3'
  },
  {
    parentId : '8',
    imgUrl: '../../assets/deviceBrandModels/LG-Stylo-4.png',
    model: 'LG Stylo 4'
  },
  {
    parentId : '8',
    imgUrl: '../../assets/deviceBrandModels/LG-V10.png',
    model: 'LG V10'
  },
  {
    parentId : '8',
    imgUrl: '../../assets/deviceBrandModels/LG-V20.png',
    model: 'LG V20'
  },
  {
    parentId : '8',
    imgUrl: '../../assets/deviceBrandModels/LG-V30-Plus.png',
    model: 'LG V30 Plus'
  },
  {
    parentId : '8',
    imgUrl: '../../assets/deviceBrandModels/LG-V30.png',
    model: 'LG V30'
  },
  {
    parentId : '8',
    imgUrl: '../../assets/deviceBrandModels/LG-V35.png',
    model: 'LG V35'
  },
  {
    parentId : '8',
    imgUrl: '../../assets/deviceBrandModels/LG-V40.png',
    model: 'LG V40'
  }
   ];

   // seccion para la condicion de los telefonos 
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

   // informacion adicional que se requiere para llenar formulario sobre los mobiles y condiciones
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

   // Stepper Next
   move(index: number) {
    this.stepper.selectedIndex = index;
  }



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

   Qua(q: any) {
     console.log(q);
     if (q === 'Q1') {
       this.mQuantity = 1;
     } else if ( q === 'Q2') {
       this.mQuantity = 2;
     } else if ( q === 'Q3') {
       this.mQuantity = 3;
     }
   }

    // Selector Value change depending mobile
    mPhone(val: any) {
      // console.log(val);
      if (val === 'iPhone Xs Max') {
        this.mobilePrice = 852;
      } else if (val === 'iPhone Xs') {
        this.mobilePrice = 740;
      } else if (val === 'iPhone XR') {
        this.mobilePrice = 700;
      } else if (val === 'iPhone x' ) {
        this.mobilePrice = 625;
      } else if (val === 'iPhone se') {
        this.mobilePrice = 525;
      } else if (val === 'iPhone 8 Plus') {
        this.mobilePrice = 475;
      }  else if (val === 'iPhone 8') {
        this.mobilePrice = 405;
      }  else if (val === 'iPhone 7 Plus') {
        this.mobilePrice = 325;
      }  else if (val === 'iPhone 7') {
        this.mobilePrice = 300;
      }  else if (val === 'iPhone 6s Plus') {
        this.mobilePrice = 285;
      }  else if (val === 'iPhone 6s') {
        this.mobilePrice = 225;
      }  else if (val === 'iPhone 6') {
        this.mobilePrice = 205;
      }  else if (val === 'iPhone 5s') {
        this.mobilePrice = 125;
      }  else if (val === 'iPhone 5c') {
        this.mobilePrice = 95;
      }  else if (val === 'iPhone 5') {
        this.mobilePrice = 75;
      } else if (val === '') {
        this.mobilePrice = 0;
      }
    }

    // seccion del formulario en la parte de condicion, añadiendo animaciones
    // dependiendo de la interaccion del usuario
  setOpen() {
    setTimeout(() => {
      const so = document.getElementById('carrier').classList;
      so.add('show');
    }, 800);
  }

  setOp() {
    setTimeout(() => {
      const open = document.getElementById('collapseThree').classList;
      open.add('show');
      const re = document.getElementById('carrier').classList;
      re.remove('show');
    }, 800);
  }
  ss() {
    setTimeout(() => {
      const x = document.getElementById('devicePower').classList;
      x.add('show');
      const y = document.getElementById('accuratePrice').classList;
      y.remove('show');
    }, 800);
  }
  powerOO() {
    setTimeout(() => {
      const p = document.getElementById('phoneImai').classList;
      p.add('show');
      const c = document.getElementById('devicePower').classList;
      c.remove('show');
    }, 800);
  }
  ima() {
    setTimeout(() => {
      const im = document.getElementById('collapseCheckout').classList;
      im.add('show');
      const ima = document.getElementById('phoneImai').classList;
      ima.remove('show');
    }, 800);
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
       this.router.navigate(['/dashboard/trades']);
    }, 2000);
   }

 goTo() {
  this.router.navigate(['/dashboard/trade']);
 }

 async getAllData() {
  const users = await this.success();
  const posts = await this.goTo();
}

 /* Getting only on first Conditions */

 ngOnInit() {
   this.sellProfileForm = new FormGroup({
     myMobile: new FormControl(''),
     favoriteCarrier: new FormControl(''),
     storage: new FormControl(''),
     condition: new FormControl(''),
     scrtsOrCrk: new FormControl(''),
     powerOnOff: new FormControl(''),
     imai: new FormControl(''),
     quantity: new FormControl(''),
     dataFirstName: new FormControl(''),
     dataLastName: new FormControl(''),
     dataCompany: new FormControl(''),
     dataAddress: new FormControl(''),
     dataAddressSecLine: new FormControl(''),
     dataCity: new FormControl(''),
     dataState: new FormControl(''),
     dataZip: new FormControl(''),
     dataEmail: new FormControl(''),
     dataPaypalEmail: new FormControl(''),
     dataMessage: new FormControl(''),
     payMethod: new FormControl(''),
     termsCond: new FormControl(''),
     mobileCarrier: new FormControl(''),
     price: new FormControl('')
   });

    this.userProfile = new FormGroup({
    dataFirstName: new FormControl(''),
    dataLastName: new FormControl(''),
    dataCompany: new FormControl(''),
    dataAddress: new FormControl(''),
    dataAddressSecLine: new FormControl(''),
    dataCity: new FormControl(''),
    dataState: new FormControl(''),
    dataZip: new FormControl(''),
    dataEmail: new FormControl(''),
    dataPaypalEmail: new FormControl(''),
    dataMessage: new FormControl(''),
    payMethod: new FormControl(''),
    termsCond: new FormControl(''),
    mobileCarrier: new FormControl(''),
    price: new FormControl('')
   });

  // seccion para comunicacion entre los componentes sell-device y el formulario 
  // para filtrar los datos dependiendo de la eleccion del usuario
  // nota la subscripcion no refleja datos por consola revisar la coneccion. la comunicacion 
  // se hace via service a traves de communication service

  /* this.communication.communication$.subscribe( (data) => {
    this.mobileModel = this.mobiles.filter( f => {
      return f.parentId === data.toString();
    });
 }); */

 // prueba para la comunicacion entre los componentes via services
 this.communication.change.subscribe( data => {
   console.log(data);
 });

 }

 // pensaba usarlo para cuando el cliente finaliza el proceso. 
 openSnackBar(message: string, action: string) {
   this.snackBar.open(message, action, {
     duration: 2000,
   });
 }

 model() {
  this.communication.communication$.subscribe( (data) => {
    console.log(data);
 });
 }

 // estilos en la seccion del formulario de la condicion del telefonos
 // aqui se agregan estilos y animaciones.
 style(bg: any) {
   console.log(bg);
   if (bg === 'Excellent') {
     setTimeout (() => {
      const bgColor = document.getElementById('mat-radio-31');
      bgColor.classList.add('btn-radio-check');
      setTimeout(() => {
        const i = document.getElementById('spad');
        i.classList.add('bg-white');
        i.classList.add('fadeInUp');
       // const coor = document.getElementById('mat-radio-31');
      // coor.classList.add('slideInDown');
      }, 0);
      const bgCo = document.getElementById('mat-radio-32');
      bgCo.classList.remove('btn-radio-check');
      const b = document.getElementById('mat-radio-34');
      b.classList.remove('btn-radio-check');
      const a = document.getElementById('mat-radio-33');
      a.classList.remove('btn-radio-check');
     }, 0);
   } else if (bg === 'Good') {
    const bgColor = document.getElementById('mat-radio-32');
    bgColor.classList.add('btn-radio-check');
    setTimeout(() => {
      const i = document.getElementById('spad');
      i.classList.add('bg-white');
      i.classList.add('fadeInUp');
    }, 0);
    const bgC = document.getElementById('mat-radio-31');
    bgC.classList.remove('btn-radio-check');
    const c = document.getElementById('mat-radio-33');
    c.classList.remove('btn-radio-check');
    const b = document.getElementById('mat-radio-34');
    b.classList.remove('btn-radio-check');
   } else if (bg === 'Fair') {
    const bgColor = document.getElementById('mat-radio-33');
    bgColor.classList.add('btn-radio-check');
    setTimeout(() => {
      const i = document.getElementById('spad');
      i.classList.add('bg-white');
      i.classList.add('fadeInUp');
    }, 0);
    const bgC = document.getElementById('mat-radio-31');
    bgC.classList.remove('btn-radio-check');
    const b = document.getElementById('mat-radio-32');
    b.classList.remove('btn-radio-check');
    const a = document.getElementById('mat-radio-34');
    a.classList.remove('btn-radio-check');
   } else if (bg === 'Broken') {
    const bgColor = document.getElementById('mat-radio-34');
    bgColor.classList.add('btn-radio-check');
    setTimeout(() => {
      const i = document.getElementById('spad');
      i.classList.add('bg-white');
      i.classList.add('fadeInUp');
    }, 0);
    const bgC = document.getElementById('mat-radio-31');
    bgC.classList.remove('btn-radio-check');
    const b = document.getElementById('mat-radio-32');
    b.classList.remove('btn-radio-check');
    const d = document.getElementById('mat-radio-33');
    d.classList.remove('btn-radio-check');
   }
 }

 // en esta seccion se guardan los datos a la base de datos en firebase
 // nota realizar un nuevo usuario en firebase y generar codigos 
 // para reemplazarlos en environment ts en la seccion de firebase.
 supdate(product) {
   if (this.id) { this.productsService.savePro(this.id, product);
   } else {
   this.productsService.create(product);
   }
 }
 save(product) {
   this.productsService.create(product);
 }
 uD(user) {
  if (this.id) { this.productsService.savePro(this.id, user);
  } else {
  this.productsService.uDetails(user);
  }
 }
}
