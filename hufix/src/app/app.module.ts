import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

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
         MatRadioModule } from '@angular/material';
import { FormDetailsMobileComponent } from './form-details-mobile/form-details-mobile.component';


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
    FormDetailsMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // Angular Material
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatRadioModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
