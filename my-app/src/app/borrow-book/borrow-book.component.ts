import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-borrow-book',
  standalone: false,
  templateUrl: './borrow-book.component.html',
  styleUrl: './borrow-book.component.css'
})
export class BorrowBookComponent implements OnInit {

  today: string;
  book: Book = new Book();
  id: number;

  constructor(private bookService: BookService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const now = new Date();
    this.today = now.toISOString().split('T')[0]; // vo formáte YYYY-MM-DD

    this.id = this.route.snapshot.params['id'];
    this.bookService.getBookById(this.id).subscribe(data => {
        this.book = data;
      },
      error => console.log(error));
  }

  onSubmit() {
    console.log(this.book);

    const selected = new Date(this.book.borrowed.from);  // z inputu
    const today = new Date();

    selected.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const originalDate = this.book.borrowed.from; // napr. "2025-05-13"
    this.book.borrowed.from = this.formatDateToSk(originalDate);

    if (!this.book.borrowed.firstName || !this.book.borrowed.lastName) {
      alert('Meno a priezvisko musi byť vyplnené.');
      return;
    }
    if (selected > today || !this.book.borrowed.from || isNaN(Date.parse(this.book.borrowed.from))) {
      alert('Dátum výpožičky musí byť nastavený a nemôže byť v budúcnosti.');
      return;
    }

    this.saveBook();
  }

  formatDateToSk(dateStr: string): string {
    if (!dateStr) {
      return ''; // neformátuj nič, ak nie je dátum
    }

    const date = new Date(dateStr);
    if (isNaN(date.getTime())) {
      return ''; // neplatný dátum
    }

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
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

