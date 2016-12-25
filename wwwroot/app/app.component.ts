import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
             <mq-charts></mq-charts>`,
})
export class AppComponent  { name = 'Angular'; }
