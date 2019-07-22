import { Injectable, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  // se crea un subject nuevo para resguardar datos
  private brandCommunication = new Subject<any>();
  communication$ = this.brandCommunication.asObservable();

  // se crea el output para enviar datso
  @Output() change: EventEmitter<string> = new EventEmitter();

  constructor() { }

  // funcion para enviar los datos al form-details component
  commBrand(communication: any) {
   this.brandCommunication.next(communication);
   this.change.emit(communication);
    console.log(communication);
  }
}
