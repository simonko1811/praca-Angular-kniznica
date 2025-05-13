import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-available-book',
  standalone: false,
  templateUrl: './available-book.component.html',
  styleUrl: './available-book.component.css'
})
export class AvailableBookComponent implements OnInit {

  books: Book[];
  constructor(private bookService: BookService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getBook();
  }

  private getBook(){
    this.bookService.getAvailableBookList().subscribe(books => this.books = books);
  }

  updateBook(id: number) {
    this.router.navigate(['edit-book', id]);
  }

  borrowBook(id: number) {
    this.router.navigate(['borrow-book', id]);
  }
}

