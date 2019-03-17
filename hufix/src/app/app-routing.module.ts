import { AddressComponent } from './address/address.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { FormDetailsMobileComponent } from './form-details-mobile/form-details-mobile.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellDeviceComponent } from './nav-switch/sell-device/sell-device.component';
import { TrackDeviceComponent } from './nav-switch/track-device/track-device.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { TradesComponent } from './trades/trades.component';
import { ReferralsComponent } from './referrals/referrals.component';

const routes: Routes = [
  {path: '', redirectTo: '/sell', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'sell', component: SellDeviceComponent},
  {path: 'track', component: TrackDeviceComponent},
  {path: 'details', component: FormDetailsMobileComponent},
  {path: 'dashboard', component: UserDashboardComponent,
  children: [
    {path: 'userAccount', component: UserAccountComponent},
    {path: 'trades', component: TradesComponent},
    {path: 'referrals', component: ReferralsComponent},
    {path: 'address', component: AddressComponent}
  ]},

  {path: '', component: UserDashboardComponent, outlet: 'dash'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
