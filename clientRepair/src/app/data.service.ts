import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Records} from './records';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  searchRecord(){
    return this.http.get('http://localhost:3000/repair_order')
  }

}
