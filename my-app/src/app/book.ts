//import {Borrowed} from './borrowed';

export class Book {
  id: number;
  title: string;
  author: string;
  borrowed: Borrowed = new Borrowed();
}

export class Borrowed {
  firstName: string;
  lastName: string;
  from: string;
}
