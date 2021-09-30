import {Book} from "./Book";
import {empty} from "rxjs/internal/Observer";
import {not} from "rxjs/internal-compatibility";
import {newArray} from "@angular/compiler/src/util";

export class Author{
  id?:number ;
  name?:string ;
  birthdate?:Date ;
  books?:Book[] ;
  constructor() {


  }
}
