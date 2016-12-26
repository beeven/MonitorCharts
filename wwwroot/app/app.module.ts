import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MQChartsModule } from './mq-charts/mq-charts.module';
import { ProfileChartsModule } from './profile-charts/profile-charts.module';

@NgModule({
  imports:      [ BrowserModule, MQChartsModule, ProfileChartsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
