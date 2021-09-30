import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


import {HomeService} from "../home.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{

   hello : string

  constructor(
    private http: HttpClient,
    private router: Router,
    private homeService: HomeService ) {
    this.hello ="";
    this.SayHello();
  }

  ngOnInit() {
    // this.http.get<any>('http://localhost:8000/hello').subscribe(data => {
    //   this.hello = data;
  //})
  }


   SayHello() {
    this.homeService.sayHello().subscribe(data => {
      this.hello = data;


      });


    }




}
