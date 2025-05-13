import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-book',
  standalone: false,
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent implements OnInit {

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

    if (selected > today) {
      alert('Dátum výpožičky musí byť nastavený a nemôže byť v budúcnosti.');
      return;
    }
    if(!this.book.title) {
      alert('Treba zadať názov.');
      return;
    }
    if(!this.book.author) {
      alert('Treba zadať autora.');
      return;
    }

    if (!this.book.borrowed.firstName) {
      this.book.borrowed.firstName = '';
    }
    if  (!this.book.borrowed.lastName) {
      this.book.borrowed.lastName = ''
    }
    if  (!this.book.borrowed.from) {
      this.book.borrowed.from = ''
    }

    const originalDate = this.book.borrowed.from; // napr. "2025-05-13"
    this.book.borrowed.from = this.formatDateToSk(originalDate);

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
