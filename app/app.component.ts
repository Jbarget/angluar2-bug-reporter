import {Component} from 'angular2/core';
import NavBar from './nav.component';
import Chart from './chart.component';

@Component({
  selector: 'main-app',
  template: `
    <div class="main-app">
      <nav-bar></nav-bar>
      <chart></chart>
    </div>`,
  directives: [NavBar, Chart]
})

export class AppComponent {
  constructor() {}
}
