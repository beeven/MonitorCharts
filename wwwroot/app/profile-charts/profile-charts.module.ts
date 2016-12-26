import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { GaugeComponent } from './gauge.component';
import { ProfileChartsComponent } from './profile-charts.component';
import { ProfileChartsService } from './profile-charts.service';


@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ ProfileChartsComponent, GaugeComponent ],
  exports: [ ProfileChartsComponent ],
  providers: [ ProfileChartsService ]
})
export class ProfileChartsModule { }
