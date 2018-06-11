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
      .map( (res: Response) => res.json() );
  }

  getStocks() : string[]{
    return ['AAPL', 'IBM', 'GOOG', 'UDEMY', 'ABC'];
  }

  createStock(newStockCode : string, newName : string) : Observable<any>{
    return this.http.post('http://localhost:3000/stocks', {name: newName, stockCode: newStockCode});
  }

  updateStock(stockId : string, newStockCode : string, newName : string) : Observable<any> {
    return this.http.put(`http://localhost:3000/stocks/${stockId}`, {name: newName, stockCode: newStockCode});
  }

  deleteStock(stockId : string) : Observable<any>{
    return this.http.delete(`http://localhost:3000/stocks/${stockId}`);
  }
}
