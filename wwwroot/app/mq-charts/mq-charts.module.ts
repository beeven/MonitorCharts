import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { MQChartsComponent }  from './mq-charts.component';
import { QueueChartComponent } from './queue-chart.component';
import { MQService } from './mq-charts.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ MQChartsComponent, QueueChartComponent ],
  providers: [ MQService ],
  exports: [ MQChartsComponent ]
})
export class MQChartsModule { }
