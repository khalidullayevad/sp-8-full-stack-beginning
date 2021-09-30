import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from "./app.component";

import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { SumComponent } from './sum/sum.component';
import { AddtwohoursComponent } from './addtwohours/addtwohours.component';
 import {BookListComponent} from "./book-list/book-list.component";


@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
     SumComponent,
     AddtwohoursComponent,
     BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
