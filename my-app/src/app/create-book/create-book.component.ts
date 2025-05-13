import { Component } from '@angular/core';
import { Book } from '../book';
import {BookService} from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-book',
  standalone: false,
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.css'
})
export class CreateBookComponent {

  book: Book = new Book();

  constructor(private bookService: BookService,
    private router: Router) {
  }

  ngOnInit() {}

  saveBook() {
    this.bookService.createBook(this.book).subscribe(data => {
      console.log(data);
      this.goToBookList();
    },
      error => console.log(error));
    this.goToBookList();
  }

  goToBookList() {
    this.router.navigate(['/books']);
  }

  onSubmit() {
    console.log(this.book);

    if(!this.book.title) {
      alert('Treba zadať názov.');
      return;
    }
    if(!this.book.author) {
      alert('Treba zadať autora.');
      return;
    }

    if (!this.book.borrowed || !this.book.borrowed.firstName || !this.book.borrowed.lastName || !this.book.borrowed.from) {
      this.book.borrowed = {
        firstName: '',
        lastName: '',
        from: ''
      };
    }
    this.saveBook();
  }
}
