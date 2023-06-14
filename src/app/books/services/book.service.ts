import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  //Method List
  list(){
    return  this.http.get('http://localhost:8080/api/v1/book/list/page?page=0&size=10&sort=title,desc')
    .pipe(
      map(data=>{
        return data;
      })
    )

  }

  //search
  search(title:String){
    return this.http.get('http://localhost:8080/api/v1/book/search/'+title)
    .pipe(
      map(data=>{
        return data;
      })
    )
  }

  //update
  update(id:number, book:any){
    console.log(book);
    book.id=id;
    console.log(book);
   return this.http.put('http://localhost:8080/api/v1/book/update', book)
   .pipe(
    map(data=>{
      return data;
    })
   )
  }

  //Delete
  delete(id:number){
    return this.http.delete('http://localhost:8080/api/v1/book/delete/'+id)
    .pipe(
      map(data=>{
        return data;
      })
    )

  }


  //Method para guardar book
  save(book:any){
    return this.http.post('http://localhost:8080/api/v1/book/save', book)
    .pipe(
      map(data=>{
        return data;
      })
    )
  }

  //Method para listar los authores
  getAuthor(){
    return this.http.get('http://localhost:8080/api/v1/author/list')
    .pipe(
      map(data=>{
        return data;
      })
    )
  }
}
