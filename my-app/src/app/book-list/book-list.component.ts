import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: false,
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent  implements OnInit {

  books: Book[];
  constructor(private bookService: BookService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getBook();
  }

  private getBook(){
    this.bookService.getBookList().subscribe(books => this.books = books);
  }

  updateBook(id: number) {
    this.router.navigate(['edit-book', id]);
  }

  borrowBook(id: number) {
    this.router.navigate(['borrow-book', id]);
  }

  returnBook(id: number) {
    this.router.navigate(['return-book', id]);
  }

  deleteBook(id: number) {
    this.router.navigate(['delete-book', id]);
  }
}
