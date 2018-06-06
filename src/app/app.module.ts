import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StocksComponent} from './stocks.component';
import { MutualfundsComponent } from './mutualfunds/mutualfunds.component';
import {HighlightDirective} from './highlight.directive';
import { StockDirectiveDirective } from './stock-directive.directive';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
