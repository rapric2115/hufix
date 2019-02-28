import { HttpClient } from '@angular/common/http';
import { DeviceBrandsService } from './../../device-brands.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-sell-device',
  templateUrl: './sell-device.component.html',
  styleUrls: ['./sell-device.component.css']
})
export class SellDeviceComponent implements OnInit {

  form: any;


  constructor(public fb: FormBuilder, private DvBd: DeviceBrandsService, private _http: HttpClient) {
   }

  mainBrands = {
    title: 'Samsung',
    id: 1
  };
  mainModels = {
    title: 'xxx',
    parentId: 1
  };


   Brands = [
    {
      name: 'Samsung',
      id: 1
    },
    {
      name: 'iPhone',
      id: 2
    },
    {
      name: 'Apple Watch',
      id: 3
    },
    {
      name: 'MacBook',
      id: 4
    },
    {
      name: 'iPad',
      id: 5
    },
    {
      name: 'Google',
      id: 6
    },
    {
      name: 'HTC',
      id: 7
    },
    {
      name: 'LG',
      id: 8
    },
    {
      name: 'OnePlus',
      id: 9
    },
    {
      name: 'MacMini',
      id: 10
    },
    {
      name: 'iMac',
      id: 11
    },
    {
      name: 'Mac Pro',
      id: 12
    },
    {
      name: 'surface Studio',
      id: 13
    },
    {
      name: 'Surface',
      id: 14
    }
  ];

  Models = [
    {
      title: 'Galaxy Note 9',
      parentId: 1
    },
    {
      title: 'Galaxy 9',
      parentId: 1
    },
    {
      title: 'Galaxy S9 Plus',
      parentId: 1
    },
    {
      title: 'Galaxy Note 8',
      parentId: 1
    },
    {
      title: 'Galaxy S8 Plus',
      parentId: 1
    },
    {
      title: 'Galaxy S8',
      parentId: 1
    },
    {
      title: 'Galaxy S7 Edge',
      parentId: 1
    },
    {
      title: 'Galaxy S7',
      parentId: 1
    },
    {
      title: 'Galaxy Note 5',
      parentId: 1
    },
    {
      title: 'Galaxy S6 Edge Plus',
      parentId: 1
    },
    {
      title: 'Galaxy S5 Mini',
      parentId: 1
    },
    {
      title: 'Galaxy S6 Edge',
      parentId: 1
    },
    {
      title: 'Galaxy S6',
      parentId: 1
    },
    {
      title: 'Galaxy S5 Active',
      parentId: 1
    },
    {
      title: 'Galaxy Note Edge',
      parentId: 1
    },
    {
      title: 'Galaxy Note 4',
      parentId: 1
    },
    {
      title: 'Galaxy S5',
      parentId: 1
    },
    {
      title: 'Galaxy S4 Active',
      parentId: 1
    },
    {
      title: 'Galaxy Note 3',
      parentId: 1
    },
    {
      title: 'Galaxy S4',
      parentId: 1
    },
    {
      title: 'Galaxy S3',
      parentId: 1
    },
    {
      title: 'iPhone XR',
      parentId: 2
    },
    {
      title: 'iPhone XS Max',
      parentId: 2
    },
    {
      title: 'iPhone XS',
      parentId: 2
    },
    {
      title: 'iPhone X',
      parentId: 2
    },
    {
      title: 'iPhone 8 Plus',
      parentId: 2
    },
    {
      title: 'iPhone 8',
      parentId: 2
    },
    {
      title: 'iPhone 7 Plus',
      parentId: 2
    },
    {
      title: 'iPhone 7',
      parentId: 2
    },
    {
      title: 'iPhone SE',
      parentId: 2
    },
    {
      title: 'iPhone 6S Plus',
      parentId: 2
    },
    {
      title: 'iPhone 6S',
      parentId: 2
    },
    {
      title: 'iPhone 6 Plus',
      parentId: 2
    },
    {
      title: 'iPhone 6',
      parentId: 2
    },
    {
      title: 'iPhone 5C',
      parentId: 2
    },
    {
      title: 'iPhone 5S',
      parentId: 2
    },
    {
      title: 'iPhone 5',
      parentId: 2
    },
    {
      title: 'Apple Watch (serie 4)',
      parentId: 3
    },
    {
      title: 'Apple Watch (serie 3)',
      parentId: 3
    },
    {
      title: 'Apple Watch (serie 2)',
      parentId: 3
    },
    {
      title: 'Apple Watch (serie 1)',
      parentId: 3
    },
    {
      title: 'Apple Watch (1st Gen.)',
      parentId: 3
    },
    {
      title: 'MacBook (2015 -Present)',
      parentId: 4
    },
    {
      title: 'MacBook Air (2009 -Present)',
      parentId: 4
    },
    {
      title: 'MacBook Pro - No Touch Bar (2016 -Present)',
      parentId: 4
    },
    {
      title: 'MacBook Pro-Retina (2012 - 2015)',
      parentId: 4
    },
    {
      title: 'MacBook Pro-Touch Bar (2016 - Present)',
      parentId: 4
    },
    {
      title: 'MacBook Pro-Unibody (2009 - 2012)',
      parentId: 4
    },
    {
      title: 'iPad Pro (11 inch)',
      parentId: 5
    },
    {
      title: 'iPad Pro 12.9 inch (3rd Gen)',
      parentId: 5
    },
    {
      title: 'iPad Pro (6th Gen)',
      parentId: 5
    },
    {
      title: 'iPad Pro 12.9 inch (2nd Gen)',
      parentId: 5
    },
    {
      title: 'iPad Pro (10.5 inch)',
      parentId: 5
    },
    {
      title: 'iPad Pro (5th Gen)',
      parentId: 5
    },
    {
      title: 'iPad Pro (9.7 inch)',
      parentId: 5
    },
    {
      title: 'iPad Pro 12.9 inch (1st Gen)',
      parentId: 5
    },
    {
      title: 'iPad Mini (4th Gen)',
      parentId: 5
    },
    {
      title: 'iPad Mini (3rd Gen)',
      parentId: 5
    },
    {
      title: 'iPad Air (2nd Gen)',
      parentId: 5
    },
    {
      title: 'iPad Mini (2nd Gen)',
      parentId: 5
    },
    {
      title: 'iPad Air (1st Gen)',
      parentId: 5
    },
    {
      title: 'iPad Mini (1st Gen)',
      parentId: 5
    },
    {
      title: 'iPad (4th Gen)',
      parentId: 5
    },
    {
      title: 'iPad (3rd Gen)',
      parentId: 5
    },
    {
      title: 'iPad (2nd Gen)',
      parentId: 5
    },
    {
      title: 'Google Pixel 3',
      parentId: 6
    },
    {
      title: 'Google Pixel 3 XL',
      parentId: 6
    },
    {
      title: 'Google Pixel 2 XL',
      parentId: 6
    },
    {
      title: 'Google Pixel 2',
      parentId: 6
    },
    {
      title: 'Google Pixel XL',
      parentId: 6
    },
    {
      title: 'Google Pixel',
      parentId: 6
    },
    {
      title: 'Nexus 6P',
      parentId: 6
    },
    {
      title: 'Nexus 5X',
      parentId: 6
    },
    {
      title: 'HTC U12 Plus',
      parentId: 7
    },
    {
      title: 'HTC U11',
      parentId: 7
    },
    {
      title: 'HTC 10',
      parentId: 7
    },
    {
      title: 'HTC One M9',
      parentId: 7
    },
    {
      title: 'LG V3S ThinQ',
      parentId: 8
    },
    {
      title: 'LG G7 ThinQ',
      parentId: 8
    },
    {
      title: 'LG V30',
      parentId: 8
    },
    {
      title: 'LG G6',
      parentId: 8
    },
    {
      title: 'LG V20',
      parentId: 8
    },
    {
      title: 'LG V10',
      parentId: 8
    },
    {
      title: 'LG G5',
      parentId: 8
    },
    {
      title: 'OnePlus 6T',
      parentId: 9
    },
    {
      title: 'OnePlus 6',
      parentId: 9
    },
    {
      title: 'OnePlus 5T',
      parentId: 9
    },
    {
      title: 'OnePlus 5',
      parentId: 9
    },
    {
      title: 'OnePlus 3T',
      parentId: 9
    },
    {
      title: 'OnePlus 3',
      parentId: 9
    },
    {
      title: 'Mac Mini (2018)',
      parentId: 10
    },
    {
      title: 'Mac Mini (2014)',
      parentId: 10
    },
    {
      title: 'Mac Mini (2011 - 2012)',
      parentId: 10
    },
    {
      title: 'Mac Mini (2010)',
      parentId: 10
    },
    {
      title: 'iMac Retina 27" 5K (2014 - Present)',
      parentId: 11
    },
    {
      title: 'iMac Pro 27"',
      parentId: 11
    },
    {
      title: 'iMac Slim Unibody 21.5"',
      parentId: 11
    },
    {
      title: 'iMac Slim Unibody 21.5" (Retina 4K)',
      parentId: 11
    },
    {
      title: 'iMac Slim Unibody 27"',
      parentId: 11
    },
    {
      title: 'Mac Pro (Latest Model)',
      parentId: 12
    },
    {
      title: 'Microsoft Surface Studio',
      parentId: 13
    },
    {
      title: 'Microsoft Surface Laptop',
      parentId: 14
    },
    {
      title: 'Microsoft Surface Book',
      parentId: 14
    },
    {
      title: 'Microsoft Surface Pro',
      parentId: 14
    }
  ];

  filterById(id) {
    return this.Models.filter(item => item.parentId === id);
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      brand: [''],
      model: ['']
    });
  }
  onSubmit() {
    console.log('form' , this.form.value);
  }

  /*showBrands() {
    this.DvBd.getBrands().subscribe((data) => {
      this.bds = data;
      console.log(this.bds);
  });
}*/

}
