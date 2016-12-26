import { Injectable, EventEmitter } from '@angular/core';
import { MachineStatus } from './machine-status';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import 'rxjs/Rx';


@Injectable()
export class ProfileChartsService {
    statusUpdated: EventEmitter<MachineStatus[]> = new EventEmitter<MachineStatus[]>();

    machineStatus: MachineStatus[]= [];

    constructor() {
        this.getAllStatus().subscribe(ms=>{
            this.machineStatus = ms;

            Observable.timer(1000,3000)
            .subscribe(()=>{
                for(let m of this.machineStatus) {
                    m.cpu = Math.round(Math.random()*100);
                }
                this.statusUpdated.emit(this.machineStatus);
            });
        })
        
    }
    

    getAllStatus(): Observable<MachineStatus[]> {
        return Observable.timer(3000).map(()=> [
            {ip: "172.29.7.172", cpu: Math.random()*100, memory: { usage: Math.random()*100, capacity: 64}, name: "Interchange", disk: Math.random()*100},
            {ip: "172.29.7.173", cpu: Math.random()*100, memory: { usage: Math.random()*100, capacity: 64}, name: "Integrator", disk: Math.random()*100},
            {ip: "172.29.7.174", cpu: Math.random()*100, memory: { usage: Math.random()*100, capacity: 64}, name: "Integrator", disk: Math.random()*100},
            {ip: "172.29.7.175", cpu: Math.random()*100, memory: { usage: Math.random()*100, capacity: 64}, name: "Integrator", disk: Math.random()*100},
            {ip: "172.29.7.176", cpu: Math.random()*100, memory: { usage: Math.random()*100, capacity: 64}, name: "Integrator", disk: Math.random()*100},
            {ip: "172.29.7.177", cpu: Math.random()*100, memory: { usage: Math.random()*100, capacity: 64}, name: "Integrator", disk: Math.random()*100},
        ]);
    }
}