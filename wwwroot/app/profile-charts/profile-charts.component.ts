import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/observable/timer';
import 'rxjs/add/observable/of';
import { MachineStatus } from './machine-status';
import { ProfileChartsService } from './profile-charts.service';

@Component({
  selector: 'profile-charts',
  template: `<ul class="gauges">
                <li *ngFor="let m of machines">
                    <gauge [status]="m"></gauge>
                </li>
            </ul>`,
  styles: [`
    ul.gauges {
        padding: 0;
        margin: 0;
    }

    ul.gauges li {
        list-style: none;
        margin: 0;
        padding: 0;
        float: left;
    }
  `]
})
export class ProfileChartsComponent implements OnInit  {
    machines: MachineStatus[];
    constructor(private profileChartsService: ProfileChartsService) {
        this.profileChartsService.statusUpdated.first().subscribe((ms: MachineStatus[])=>{
            this.machines = ms;
            console.log(ms);
        });
        
    }
    ngOnInit() {
    }

}
