import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PlansComponent } from './plans/plans.component';
import { AirtelplanComponent } from './plans/airtelplan/airtelplan.component';
import { JioplanComponent } from './plans/jioplan/jioplan.component';
import { BsnlplanComponent } from './plans/bsnlplan/bsnlplan.component';
import { VodaideaplanComponent } from './plans/vodaideaplan/vodaideaplan.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './shared/material.module';
import { RpayapiService } from './services/rpayapi.service';

import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PlansComponent,
    AirtelplanComponent,
    JioplanComponent,
    BsnlplanComponent,
    VodaideaplanComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [RpayapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
