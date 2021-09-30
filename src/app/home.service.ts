import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "./models/Book";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  //private url = 'http://localhost:8000/hello';

  constructor(private http: HttpClient) {
  }

   sayHello(): Observable<any> {
     let url = 'http://localhost:8000/hello';
     return this.http.get(url,{responseType: 'text'});
  }

  getSum(num1: number, num2: number): Observable<any> {

    return this.http.get('http://localhost:8000/sum?num1='+num1+'&num2='+num2);
  }
  addTwoHours(str: string): Observable<any>{
    return this.http.get('http://localhost:8000/addTwoHours?date='+str,{responseType: 'text'});
  }

  getAllBooks(): Observable<Book[]>{
    return this.http.get<Book[]>('http://localhost:8000/allBooks');
  }

}
