import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  msnSend() {
    Swal.fire('Your Contact information has been sent Successfully', '', 'success');
}

  ngOnInit() {
  }

}
