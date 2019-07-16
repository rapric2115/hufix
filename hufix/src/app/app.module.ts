import { AuthGuardService } from './shared/auth-guard.service';
import { AuthService } from './shared/auth.service';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NavSwitchComponent } from './nav-switch/nav-switch.component';
import { SellDeviceComponent } from './nav-switch/sell-device/sell-device.component';
import { TrackDeviceComponent } from './nav-switch/track-device/track-device.component';
import { CallActionComponent } from './call-action/call-action.component';
import { BlogArticlesComponent } from './blog-articles/blog-articles.component';
import { SubscribeBtnComponent } from './subscribe-btn/subscribe-btn.component';
import { FooterComponent } from './footer/footer.component';
import { environment } from 'src/environments/environment';

// Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule,
         MatInputModule,
         MatExpansionModule,
         MatRadioModule,
         MatSelectModule,
         MatCheckboxModule,
         MatIconModule,
         MatSnackBarModule,
         MatDialogModule,
         MatButtonModule } from '@angular/material';
import { FormDetailsMobileComponent } from './form-details-mobile/form-details-mobile.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { TradesComponent } from './trades/trades.component';
import { ReferralsComponent } from './referrals/referrals.component';
import { AddressComponent } from './address/address.component';
import { FAQComponent } from './faq/faq.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { ContactComponent } from './contact/contact.component';
import { UserService } from './shared/user.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { TestingFormComponent } from './testing-form/testing-form.component';
import { ProductsService } from './shared/products.service';
import { BrandComponent } from './brand/brand.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SideNavComponent,
    NavSwitchComponent,
    SellDeviceComponent,
    TrackDeviceComponent,
    CallActionComponent,
    BlogArticlesComponent,
    SubscribeBtnComponent,
    FooterComponent,
    FormDetailsMobileComponent,
    UserDashboardComponent,
    UserAccountComponent,
    TradesComponent,
    ReferralsComponent,
    AddressComponent,
    FAQComponent,
    EnterpriseComponent,
    ContactComponent,
    TestingFormComponent,
    BrandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // Angular Material
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
