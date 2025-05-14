import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { HttpClientModule} from '@angular/common/http';
import { CreateBookComponent } from './create-book/create-book.component';
import { FormsModule } from '@angular/forms';
import { EditBookComponent } from './edit-book/edit-book.component';
import { BorrowBookComponent } from './borrow-book/borrow-book.component';
import { BorrowedBookComponent } from './borrowed-book/borrowed-book.component';
import { AvailableBookComponent } from './available-book/available-book.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    CreateBookComponent,
    EditBookComponent,
    BorrowBookComponent,
    BorrowedBookComponent,
    AvailableBookComponent,
    ReturnBookComponent,
    DeleteBookComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
