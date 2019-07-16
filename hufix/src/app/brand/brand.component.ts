import { CommunicationService } from './../communication.service';
import { Component, OnInit } from '@angular/core';



export interface Brand {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor(private communication: CommunicationService) { }

  brands: Brand[] = [
    {value: '1', viewValue: 'Iphone'},
    {value: '2', viewValue: 'Samsung'},
    {value: '3', viewValue: 'Alcatel'}
  ];


  ngOnInit() {
    this.communication.communication$.subscribe(
      brand => {
        console.log(brand);
      }
    )
  }

}
