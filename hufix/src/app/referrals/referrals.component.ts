import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.css']
})
export class ReferralsComponent implements OnInit {

  refUrl: any;
  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
    this.refUrl = this.document.location.href;
    console.log(this.refUrl);
  }

  ngOnInit() {
  }

}
