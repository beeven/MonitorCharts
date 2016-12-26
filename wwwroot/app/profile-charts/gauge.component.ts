import { Component, OnInit, ElementRef, Input, OnChanges, SimpleChange } from '@angular/core';
import echart = require("echarts");
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { MachineStatus } from './machine-status';
import { ProfileChartsService } from './profile-charts.service';

@Component({
  selector: 'gauge',
  template: `<div class="gauge"></div>`,
  styles: [`
    .gauge {
        width: 400px;
        height: 150px;
    }
  `]
})
export class GaugeComponent implements OnInit {
    el: ElementRef;
    chart: ECharts.ECharts;
    chartOption: ECharts.EChartOption;
    @Input() status: MachineStatus;

    constructor(el: ElementRef, private profileChartsService:ProfileChartsService ) {
        this.el = el;
        console.log("genrating component..")
        
    }
    ngOnInit() {
        console.log("initializing...")
        this.chart = echart.init(this.el.nativeElement.children[0]);
        this.chartOption = {
            title: {
                text: this.status.name
            },
            tooltip: {},
            series: [{
                name: 'CPU',
                type: 'gauge',
                min: 0,
                max: 100,
                axisLine: {
                    lineStyle: {
                        width: 8
                    }
                },
                axisTick: {
                    length: 10,
                    lineStyle: {
                        color: 'auto'
                    }
                },
                splitLine: {
                    length:15,
                    lineStyle: {
                        color: 'auto'
                    }
                },
                splitNumber: 2,
                title: {
                    textStyle: {
                        fontWeight: 'bolder',
                        fontSize: 20,
                        fontStyle: 'italic'
                    }
                },
                pointer: { width: 5 },
                detail: {
                    formatter:'{value}%',
                    textStyle: {     
                        fontSize: 15
                    },
                },
                data: [{value:this.status.cpu, name:"CPU"}]
            },
            {
                name: 'memory',
                type:'gauge',
                center: ['20%','50%'],
                //radius: '50%',
                min:0,
                max: this.status.memory.capacity,
                splitNumber: 4,
                axisLine: {
                    lineStyle: {
                        width: 8
                    }
                },
                axisTick: {
                    length: 10,
                    lineStyle: {
                        color: 'auto'
                    }
                },
                splitLine: {
                    length:15,
                    lineStyle: {
                        color: 'auto'
                    }
                },
                pointer: {
                    width: 5
                },
                title: {
                    text: 'mem'
                },
                detail: {
                    formatter:'{value}%',
                    textStyle: {      
                        fontSize: 15
                    },
                },
                data: [{value: Math.round(this.status.memory.usage / 100*this.status.memory.capacity), name:"mem"}]
            },
            {
                name: 'disk',
                type: 'gauge',
                center: ['80%','50%'],
                min: 0,
                max: 100,
                splitNumber: 4,
                axisLine: {
                    lineStyle: {
                        width: 8
                    }
                },
                axisTick: {
                    length: 10,
                    lineStyle: {
                        color: 'auto'
                    }
                },
                splitLine: {
                    length:15,
                    lineStyle: {
                        color: 'auto'
                    }
                },
                pointer: {
                    width: 5
                },
                title: {
                    text: 'mem'
                },
                detail: {
                    formatter:'{value}%',
                    textStyle: {      
                        fontSize: 15
                    },
                },
                data: [{value: this.status.disk, name:"disk"}]
            }]
        };

        this.chart.setOption(this.chartOption);
        

        this.profileChartsService.statusUpdated.subscribe( (ms:MachineStatus[]) => {
            var currentStatus =  ms.find(x=>x.ip == this.status.ip);
            this.chartOption.series[0].data[0].value = currentStatus.cpu;
            this.chart.setOption(this.chartOption);
        });
    }

}
