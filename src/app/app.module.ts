import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { SpeedComponent } from './speed/speed.component';
import { LengthComponent } from './length/length.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TemperatureComponent,
    SpeedComponent,
    LengthComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
