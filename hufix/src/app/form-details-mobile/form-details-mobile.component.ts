import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-form-details-mobile',
  templateUrl: './form-details-mobile.component.html',
  styleUrls: ['./form-details-mobile.component.css']
})
export class FormDetailsMobileComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  favoriteCarrier: string;
  carriers: string[] = ['Verizon', 'AT&T', 'Spring', 'T Mobile', 'Unlocked'];
  mobileStorage: string;
  storage: string[] = ['64 GB', '256 GB', '512 GB'];
  mobileCondition: string;
  condition: string[] = ['Excellent', 'Good', 'Fair', 'Broken'];
  devicePowerOnOff: string;
  powerOnOff: string[] = ['Yes', 'No'];

  constructor(private _formBuilder: FormBuilder) {}
  panelOpenState = false;

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
