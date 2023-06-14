import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BookListComponent } from './books/components/book-list/book-list.component';
import { BookViewComponent } from './books/components/book-view/book-view.component';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorComponent } from './authors/components/author/author.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BookListComponent,
    BookViewComponent,
    AuthorComponent
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
export class AppModule { }
