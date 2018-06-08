import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class StockService {

  constructor(private http : HttpClient) {

  }

  getStocksAPI(): Observable<any>{
    return this.http.get('http://localhost:3000/stocks')
      .map( (res: Response) => res.json() )
      .catch( (error: any) => Observable.throw(error.json().error || 'Server error') );
  }

  getStocks() : string[]{
    return ['AAPL', 'IBM', 'GOOG', 'UDEMY', 'ABC'];
  }
}
