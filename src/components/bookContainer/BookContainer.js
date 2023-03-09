import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from '../Addbook/AddingBooks';
import Books from '../books/Books';

const BookContainer = () => {
  const books = useSelector((state) => state.booksReducer);
  return (
    <div>
      <section>
        {books.map((book) => (
          <Books
            key={book.id}
            title={book.title}
            author={book.author}
            id={book.id}
          />
        ))}
      </section>
      <AddBook />
    </div>
  );
};

export default BookContainer;
