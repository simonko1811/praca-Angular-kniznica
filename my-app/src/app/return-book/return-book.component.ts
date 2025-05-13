import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-return-book',
  standalone: false,
  templateUrl: './return-book.component.html',
  styleUrl: './return-book.component.css'
})
export class ReturnBookComponent implements OnInit {

  book: Book = new Book();
  id: number;

  constructor(private bookService: BookService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBookById(this.id).subscribe(data => {
        this.book = data;
      },
      error => console.log(error));
  }

  onSubmit() {
    console.log(this.book);
    this.book.borrowed.firstName = '';
    this.book.borrowed.lastName = '';
    this.book.borrowed.from = '';
    this.saveBook();
  }

  goBack() {
    this.router.navigate(['/']);
  }

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
}


