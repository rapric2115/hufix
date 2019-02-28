import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceBrandsService {

  constructor(private _http: HttpClient) { }
  configUrl = '../assets/deviceBrandModels/brands-models.json';

  getBrands() {
    return this._http.get(this.configUrl);
  }
}
