import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div class="banner">监控平台</div>
      <div class="dashboard">
          <div class='left-panel'>
            <mq-charts></mq-charts>
          </div>
          <div class='right-panel'>
            <profile-charts></profile-charts>
          </div>
      </div>
      
             `,
  styles:[`
    .banner {
      color: white;
      background-color: #000;
      padding: 5px 30px;
      font-size: 40px;
      margin-bottom: 10px;
    }
    .dashboard {
      display: flex;
      flex-direction: row;
    }
    .left-panel {
      flow: 1;
      padding-left: 10px
    }
    .right-panel {
      flow: 3;
    }
  `]
})
export class AppComponent  { name = 'Angular'; }
