import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { SpeedComponent } from './speed/speed.component';
import { LengthComponent } from './length/length.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {RouterModule} from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {FormsModule} from "@angular/forms";
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TemperatureComponent,
    SpeedComponent,
    LengthComponent,
    PageNotFoundComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, RouterModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
