import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http:HttpClient) { }

  //Method List
  list(){
    return  this.http.get('http://localhost:8080/api/v1/author/list')
    .pipe(
      map(data=>{
        return data;
      })
    )

  }

  //search
  search(name:String){
    return this.http.get('http://localhost:8080/api/v1/author/search/'+ name)
    .pipe(
      map(data=>{
        return data;
      })
    )
  }

  //update
  update(id:number, author:any){
   return this.http.put('http://localhost:8080/api/v1/author/update/'+id, author)
   .pipe(
    map(data=>{
      return data;
    })
   )
  }

  //Delete
  delete(id:number){
    return this.http.delete('http://localhost:8080/api/v1/author/delete/'+id)
    .pipe(
      map(data=>{
        return data;
      })
    )

  }


  //Method para guardar author
  save(author:any){
    return this.http.post('http://localhost:8080/api/v1/author/save', author)
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
