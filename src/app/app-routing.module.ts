import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './books/components/book-list/book-list.component';
import { AuthorComponent } from './authors/components/author/author.component';


const routes: Routes = [
  {
   path:'books/list', 
   title:'Books List',
   component:BookListComponent
   
  },
  {
    path:'author/list',
    title : 'Authors',
    component : AuthorComponent
  }
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
