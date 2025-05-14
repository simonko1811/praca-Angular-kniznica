import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import {BorrowBookComponent} from './borrow-book/borrow-book.component';
import {AvailableBookComponent} from './available-book/available-book.component';
import {BorrowedBookComponent} from './borrowed-book/borrowed-book.component';
import {ReturnBookComponent} from './return-book/return-book.component';
import {DeleteBookComponent} from './delete-book/delete-book.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'books', component: BookListComponent},
  {path: 'create-book', component: CreateBookComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'edit-book/:id', component: EditBookComponent},
  {path: 'borrow-book/:id', component: BorrowBookComponent},
  {path: 'borrowed-book', component: BorrowedBookComponent},
  {path: 'available-book', component: AvailableBookComponent},
  {path: 'return-book/:id', component: ReturnBookComponent},
  {path: 'delete-book/:id', component: DeleteBookComponent},
  {path: 'available-book', component: AvailableBookComponent},
  {path: 'login', component: LoginComponent},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
