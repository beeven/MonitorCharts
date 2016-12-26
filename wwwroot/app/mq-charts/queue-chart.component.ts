import { Component, OnInit, ElementRef } from '@angular/core';
import echart = require("echarts");
import { QueueStatus } from './queue-status';
import { MQService } from './mq-charts.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'queue-chart',
  template: `<div class="queue-chart"></div>`,
  styles: [`
    .queue-chart {
        width: 400px;
        height: 300px;
    }
  `]
})
export class QueueChartComponent implements OnInit  {
    el: ElementRef;
    chart: ECharts.ECharts;
    constructor(el: ElementRef,private mqService: MQService ) {
        this.el = el;
    }
    ngOnInit() {
        this.chart = echart.init(this.el.nativeElement.children[0]);
        this.chart.setOption({
            title: {
                text: "Test bar chart"
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
                type: 'category',
                axisLabel: {
                    rotate: 45,
                    interval: 0
                }
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });

        var source = Observable.timer(1000, 3000);
        var update = source.switchMap(()=> this.mqService.getQueueStatus());
        
        var subscribe = update.subscribe(val => {
            this.chart.setOption({
                xAxis: {
                    data: val.map(x=>x.name)
                },
                series:[{
                    data: val.map(x=>x.depth)
                }]
            })
        });
        
    }

}
