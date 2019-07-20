import { Injectable, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private brandCommunication = new Subject<any>();
  communication$ = this.brandCommunication.asObservable();

  @Output() change: EventEmitter<string> = new EventEmitter();

  constructor() { }

  commBrand(communication: any) {
   this.brandCommunication.next(communication);
   this.change.emit(communication);
    console.log(communication);
  }
}
