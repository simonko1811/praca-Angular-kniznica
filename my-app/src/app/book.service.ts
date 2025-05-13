import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = 'http://localhost:8080/api/v1';
  constructor(private httpClient: HttpClient) { }

  getBookList(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.baseUrl}`);
  }

  createBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(`${this.baseUrl}/`, book);
  }

  getBookById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.baseUrl}/${id}`);
  }

  getBorrowedBookList(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.baseUrl}/borrowed`);
  }

  getAvailableBookList(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.baseUrl}/available`);
  }

  getDeleteBookList(book: Book): Observable<Book[]> {
    return this.httpClient.post<Book[]>(`${this.baseUrl}/delete/${book.id}`, book);
  }
}
