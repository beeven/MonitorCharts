import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http';
import { QueueStatus } from './queue-status';

@Injectable()
export class MQService {
    private mqServiceUrl = 'api/mq';
    constructor(private http: Http) {}

    getQueueStatus(): Observable<QueueStatus[]> {
        // return this.http.get(this.mqServiceUrl)
        //            .map( response => response.json() as QueueStatus[] );
        return Observable.timer(1000,3000).map(()=>[
            {name: "Queue1", depth: Math.random()*1000},
            {name: "Queue1", depth: Math.random()*1000},
            {name: "Queue1", depth: Math.random()*1000},
            {name: "Queue1", depth: Math.random()*1000},
            {name: "Queue1", depth: Math.random()*1000},
            {name: "Queue1", depth: Math.random()*1000},
            {name: "Queue1", depth: Math.random()*1000},
            {name: "Queue1", depth: Math.random()*1000},
            {name: "Queue1", depth: Math.random()*1000},
            {name: "Queue1", depth: Math.random()*1000},
            {name: "Queue1", depth: Math.random()*1000},
            {name: "Queue1", depth: Math.random()*1000},
            {name: "Queue1", depth: Math.random()*1000},
            {name: "Queue1", depth: Math.random()*1000},
            {name: "Queue1", depth: Math.random()*1000},
            {name: "Queue1", depth: Math.random()*1000},
        ])
    }
}