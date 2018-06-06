import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StocksComponent} from './stocks.component';
import { MutualfundsComponent } from './mutualfunds/mutualfunds.component';
import {HighlightDirective} from './highlight.directive';
import { StockDirectiveDirective } from './stock-directive.directive';
import {StockService} from './stock.service';
import { DateFormatterPipe } from './date-formatter.pipe';
import {FormsModule} from '@angular/forms';
import { CapitalizePipe } from './capitalize.pipe';
import { EmployeeNamePipe } from './employee-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    MutualfundsComponent,
    HighlightDirective,
    StockDirectiveDirective,
    DateFormatterPipe,
    CapitalizePipe,
    EmployeeNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
