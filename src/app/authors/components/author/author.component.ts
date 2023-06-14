import { Component } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { Iauthor } from '../../models/iauthor';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {

  //Object for data
 authors: Iauthor[]=[];

 author: Iauthor={
  id : 0,
  name : "",
  lastname : "",
  biography : ""
 }

 search : String ="";

  constructor(private authorServ:AuthorService){
    this.getAuthors();

  }

  getAuthors(){
    this.authorServ.list()
    .subscribe((res:any)=>{
      this.authors=<Iauthor []>res
    })
  }

  //Save or Update
  onSubmit(){
    const btnClose = document.getElementById('btn-close')
    if(this.author.id==0){
      this.authorServ.save(this.author)
      .subscribe(res=>{
        btnClose?.click();
        this.getAuthors();
      })
    }else{
      this.authorServ.update(this.author.id,this.author)
      .subscribe(res=>{
        btnClose?.click();
        this.getAuthors();
      })
    }
  }

  onSelected(author: Iauthor){
    this.author=author;
  }

  onDelete(){
    const btnDelete = document.getElementById('btn-delete');
    this.authorServ.delete(this.author.id)
    .subscribe(res=>{
      btnDelete?.click();
      this.getAuthors();
    })
  }

  //Search

  onSearch(){
    if(this.search.length>0){
      this.authorServ.search(this.search)
      .subscribe((res:any)=>{
        this.authors=<Iauthor []>res
      })
    }else{
     this.getAuthors();
    }
    
  }

}
