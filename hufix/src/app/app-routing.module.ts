import { FormDetailsMobileComponent } from './form-details-mobile/form-details-mobile.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellDeviceComponent } from './nav-switch/sell-device/sell-device.component';
import { TrackDeviceComponent } from './nav-switch/track-device/track-device.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'sell', component: SellDeviceComponent},
  {path: 'track', component: TrackDeviceComponent},
  {path: 'details', component: FormDetailsMobileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
