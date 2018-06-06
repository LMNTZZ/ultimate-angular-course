import {Component} from '@angular/core';

@Component({
  selector: 'app-stocks',
  template: `<h2>Stocks</h2>
  <h4>{{title}}</h4>
  <ul>
  <li *ngFor="let stock of stocks">{{stock}}</li>
  </ul>
  `
})

export class StocksComponent {
  title = 'List of Stocks: ';
  stocks = ['AAPL', 'IBM', 'GOOG', 'UDEMY'];
}
