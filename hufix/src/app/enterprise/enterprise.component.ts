import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
// import * as Swal from 'sweetalert2';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit {

  constructor() { }

  msnSend() {
      Swal.fire('Your Contact information has been sent Successfully', '', 'success');
  }

  ngOnInit() {
  }

}
