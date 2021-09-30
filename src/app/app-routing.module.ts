import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SumComponent} from "./sum/sum.component";
import {AddtwohoursComponent} from "./addtwohours/addtwohours.component";
 import {BookListComponent} from "./book-list/book-list.component";



const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'sum', component: SumComponent},
  {path: 'addtwohours', component: AddtwohoursComponent},
   { path: 'books-list', component: BookListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
