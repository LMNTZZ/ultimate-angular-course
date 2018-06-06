import {Component} from '@angular/core';
import {StockService} from './stock.service';

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
  //stocks = ['AAPL', 'IBM', 'GOOG', 'UDEMY'];
  stocks;

  constructor(stockService : StockService){
    this.stocks = stockService.getStocks();
  }
}
