import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {StocksComponent} from './stocks.component';
import { MutualfundsComponent } from './mutualfunds/mutualfunds.component';

import {HighlightDirective} from './highlight.directive';
import { StockDirectiveDirective } from './stock-directive.directive';
import { BondsDirective } from './bonds.directive';

import {StockService} from './stock.service';
import {CurrencyService} from './currency.service';

import { DateFormatterPipe } from './date-formatter.pipe';
import { CapitalizePipe } from './capitalize.pipe';
import { EmployeeNamePipe } from './employee-name.pipe';

import {routing} from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    MutualfundsComponent,
    HighlightDirective,
    StockDirectiveDirective,
    DateFormatterPipe,
    CapitalizePipe,
    EmployeeNamePipe,
    DashboardComponent,
    BondsDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    routing
  ],
  providers: [StockService, CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
