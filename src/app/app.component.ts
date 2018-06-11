import { Component } from '@angular/core';
import { StocksComponent } from './stocks.component';
import {Employee} from './employee';
import {Stock} from './stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular course';
  today = new Date();
  firstname = 'kevin';

  submitted = false;
  newStock = new Stock(0, '', '');

  employee : Employee = new Employee('John', 'Doe', 4000);

  profile = { id: 10001, name: 'James Bond', role: 'Administrator'};

  onSubmit() {
    this.submitted = true;
  }

  cancel() {
    this.submitted = false;
    this.newStock = new Stock(0, '', '');
  }

}
