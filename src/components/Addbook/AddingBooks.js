import React, { useState } from 'react';
import './AddBooks.css';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createBook } from '../../redux/books/books';

const AddBook = () => {
  const [titleInput, setTitleInput] = useState('');

  const [authorInput, setAuthorInput] = useState('');

  const titleSet = (e) => {
    setTitleInput(e.target.value);
  };

  const authorSet = (e) => {
    setAuthorInput(e.target.value);
  };

  const dispatch = useDispatch();

  const id = uuidv4();

  return (
    <section className="addingBook">
      <h1>Add a new book</h1>
      <form action="" className="data">
        <input
          type="text"
          id="title"
          name="title"
          onChange={titleSet}
          value={titleInput}
          placeholder="Title"
        />
        <input
          type="text"
          id="author"
          name="author"
          onChange={authorSet}
          value={authorInput}
          placeholder="Author"
        />
        <button onClick={() => dispatch(createBook(id, titleInput, authorInput))} type="button" name="add" id="add">
          Add Book
        </button>
      </form>
    </section>
  );
};

export default AddBook;
