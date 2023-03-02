import React from 'react';
import AddBook from '../Addbook/AddingBooks';
import Books from '../books/Books';

const BookContainer = () => (
  <div>
    <section>
      <Books
        author="Suzanne Collins"
        title="The Hunger Games"
      />
      <Books
        author="Leo Toystoy"
        title="Anna Karenina"
      />
      <Books
        author="Franck Herbert"
        title="Dune"
      />
    </section>
    <AddBook />
  </div>
);

export default BookContainer;
