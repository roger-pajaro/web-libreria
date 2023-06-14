import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  //Datos del book
  books:any[]=[];

  //Datos del author
  authors : any[]=[];

  title:String="";
  id:number=0;

  //Declarar el formulario
  form!: FormGroup;



constructor(private bookserv:BookService){
this.getBooks();
this.getAuthor();
this.formInit();


}

getBooks(){
  this.bookserv.list()
  .subscribe((res:any)=>{
    this.books=<any[]>res.content;

  })
}
// Inicializar el formulario
formInit(){
  this.form = new FormGroup({
    'title' : new FormControl('',[Validators.required,Validators.maxLength(150)]),
    'description' : new FormControl('',[Validators.required,Validators.maxLength(2000)]),
    'category' : new FormControl('',[Validators.required,Validators.maxLength(50)]),
    'price' : new FormControl('',[Validators.required,Validators.maxLength(70)]),
    'isbn' : new FormControl('',[Validators.required,Validators.maxLength(70)]),
    'pages' : new FormControl('',[Validators.required,Validators.maxLength(150)]),
    'publication_date' : new FormControl('',[Validators.required,Validators.maxLength(150)]),
    'image' : new FormControl('',[Validators.required,Validators.maxLength(250)]),
    'author' : new FormGroup({
      'id' : new FormControl('', Validators.required)
    })

  })
}

//Evento para enviar los datos la backend
onSubmit(){
  if(this.form.valid){
    if(this.id==0){
    this.bookserv.save(this.form.value)
    .subscribe(res=>{
      const btnClose = document.getElementById('btn-close');
      btnClose?.click();
      this.getBooks();
    })
  } else{
    this.bookserv.update(this.id,this.form.value)
    .subscribe(res=>{
      const btnClose = document.getElementById('btn-close');
      btnClose?.click();
      this.id=0;
      this.getBooks();
    })

  }
  }
}

//Edit
onEdit(book:any){
  this.id=book.id;
  this.form.patchValue(book);
}

//Delete
onDelete(id:number){
  this.bookserv.delete(id)
  .subscribe(res=>{
    this.getBooks();
  })
}

//Search
onSearch(){
  if(this.title.length > 0){
  this.bookserv.search(this.title)
  .subscribe((res:any)=>{
    this.books = res;
  })
}else{
  this.getBooks();
}
}

//Lista de author
getAuthor(){
    this.bookserv.getAuthor()
  .subscribe((res:any)=>{
    this.authors=res;
    console.log(this.authors);

  })
  
  

}


}
