import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-borrowed-book',
  standalone: false,
  templateUrl: './borrowed-book.component.html',
  styleUrl: './borrowed-book.component.css'
})
export class BorrowedBookComponent implements OnInit {

  books: Book[];
  constructor(private bookService: BookService,private router: Router) {
  }

  ngOnInit(): void {
    this.getBook();
  }

  private getBook(){
    this.bookService.getBorrowedBookList().subscribe(books => this.books = books);
  }

  returnBook(id: number) {
    this.router.navigate(['return-book', id]);
  }
}

