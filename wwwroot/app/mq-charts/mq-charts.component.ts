import { Component } from '@angular/core';
import { QueueChartComponent } from './queue-chart.component';

@Component({
  selector: 'mq-charts',
  template: `
      <table class="server-table">
        <thead><tr><th>IP</th><th>用途</th></tr></thead>
        <tbody>
          <tr>
            <td>172.29.1.172</td>
            <td>Interchange, Sentinal, Composer</td>
          </tr>
          <tr>
            <td>172.29.1.173</td>
            <td>Integrator</td>
          </tr>
          <tr>
            <td>172.29.1.174</td>
            <td>MQ</td>
          </tr>
          <tr>
            <td>172.29.1.175</td>
            <td>FTP</td>
          </tr>
          <tr>
            <td>172.29.1.176</td>
            <td>Oracle 1</td>
          </tr>
          <tr>
            <td>172.29.1.177</td>
            <td>Oracle 2</td>
          </tr>
          <tr>
            <td>172.29.1.52</td>
            <td>File sharing 1</td>
          </tr>
          <tr>
            <td>172.29.1.53</td>
            <td>File sharing 2</td>
          </tr>
        </tbody>
      </table>
  <queue-chart></queue-chart>`,
  styles: [`
    .server-table {
      color: white;
      border-collapse: collapse;
    }
    th, td {
      border: 1px #CCC solid;
      padding: 5px;
    }
  `]
})
export class MQChartsComponent  { }
