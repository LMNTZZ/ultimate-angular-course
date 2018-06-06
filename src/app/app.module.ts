import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StocksComponent} from './stocks.component';
import { MutualfundsComponent } from './mutualfunds/mutualfunds.component';
import {HighlightDirective} from './highlight.directive';
import { StockDirectiveDirective } from './stock-directive.directive';
import {StockService} from './stock.service';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    MutualfundsComponent,
    HighlightDirective,
    StockDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
