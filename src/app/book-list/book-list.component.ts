import { Component, OnInit } from '@angular/core';
import {HomeService} from "../home.service";

import {Book} from "../models/Book";
import {newArray} from "@angular/compiler/src/util";


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList?: Book[] ;

  constructor(private homeService:HomeService) {

  }
  ngOnInit()  {  this.listBooks() ;

    console.log(this.bookList) }

  listBooks(){
    this.homeService.getAllBooks().subscribe(data =>{
      this.bookList =data as Book[];
        console.log(data)
        console.log(this.bookList)
      },
      error => {
        console.log(error);
      });



  }

}
