import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LengthComponent } from '../length/length.component';
import { SpeedComponent } from '../speed/speed.component';
import {TemperatureComponent} from "../temperature/temperature.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";

const routes: Routes = [
  {path: 'length', component: LengthComponent},
  {path: 'speed', component: SpeedComponent},
  {path: 'temperature', component: TemperatureComponent},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
