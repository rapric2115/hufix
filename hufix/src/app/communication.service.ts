import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private brandCommunication = new Subject<any>();
  communication$ = this.brandCommunication.asObservable();

  constructor() { }

  commBrand(communication: any) {
    this.brandCommunication.next(communication);
    console.log(communication);
  }
}
