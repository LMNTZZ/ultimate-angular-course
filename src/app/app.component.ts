import { Component } from '@angular/core';
import { StocksComponent } from './stocks.component';
import {Employee} from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular course';
  today = new Date();
  firstname = 'kevin';

  employee : Employee = new Employee('John', 'Doe', 4000);

  profile = { id: 10001, name: 'James Bond', role: 'Administrator'};

}
