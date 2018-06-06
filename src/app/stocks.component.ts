import {Component} from '@angular/core';
import {StockService} from './stock.service';

@Component({
  selector: 'app-stocks',
  template: `<h2>Stocks</h2>
    <h4>{{ stockTitle }}</h4>
    <ul [ngStyle]="{'color': myColor}">
      <li *ngFor="let stock of stocks">{{ stock }}</li>
    </ul>
    <hr>
  <h4>{{ stockMarketTitle }}</h4>
    <ul *ngIf="showStockMarket">
      <li *ngFor="let stockMarket of stockMarkets">{{ stockMarket }}</li>
    </ul>
    <hr>
    <div [ngSwitch]="market" [ngClass]="'customClass'">
      <div *ngSwitchCase="'NYSE'">New York Stock Exchange</div>
      <div *ngSwitchCase="'LSE'">London Stock Exchange</div>
      <div *ngSwitchDefault>Could not find a match!</div>
    </div>
  `,
  styles: [`    
    .customClass {
      color: violet;
    }
  `]
})

export class StocksComponent {

  myColor = 'green';
  stockTitle = 'List of Stocks: ';
  stockMarketTitle = 'List of Stockmarkets';
  //stocks = ['AAPL', 'IBM', 'GOOG', 'UDEMY'];
  stocks;

  showStockMarket = true;
  market = 'NYSE';

  stockMarkets = ['NYSE', 'NASDAQ', 'EURONEXT', 'HKSE', 'LSE'];

  constructor(stockService : StockService){
    this.stocks = stockService.getStocks();
  }
}
