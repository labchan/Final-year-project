import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Records} from './records';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  [x: string]: any;

  constructor(private http: HttpClient ) { }

  url = 'http://localhost:3000/api/createOrder';

  editUrl ='http://localhost:3000/api/editOrder/';

  searchRecord() {
    return this.http.get('http://localhost:3000/api/display');
  }

  // tslint:disable-next-line: variable-name
  detailRecord(idrepair_order) {
    return this.http.get("http://localhost:3000/api/getOrderDetail/" + idrepair_order);

  }

  findRecord(building, catalog) {
   // return this.http.get("http://localhost:3000/api/search/" + building);
    return this.http.get("http://localhost:3000/api/search/" + [building] + '&' + [catalog]);

  }

  reportRecord(building) {
    return this.http.get("http://localhost:3000/api/report/" + building);
   }
  /*
  addRecord(record: Records) {
    return this.http.post<any> (this.url, record);
  } */

  addRecord(record) {
    return this.http.post<any> (this.url, record);
  }

  // tslint:disable-next-line: variable-name
  editOrder(idrepair_order, Records) {
    return this.http.patch<any> ('http://localhost:3000/api/editOrder/' + idrepair_order , Records);
  }

  // tslint:disable-next-line: variable-name
  delOrder(idrepair_order, Records) {
    return this.http.delete<any> ('http://localhost:3000/api/delOrder/' + idrepair_order , Records);
  }
}
