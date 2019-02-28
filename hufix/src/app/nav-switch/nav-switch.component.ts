import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-switch',
  templateUrl: './nav-switch.component.html',
  styleUrls: ['./nav-switch.component.css']
})
export class NavSwitchComponent implements OnInit {

  constructor() { }

  classState() { }

  trackEvent(event) {
    //Haven't really got far
    let sellD = document.getElementById('sell');
    sellD.classList.remove('active');
 }
  ngOnInit() {
  }
}

