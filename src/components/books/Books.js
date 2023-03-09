import React from 'react';
import PropTypes from 'prop-types';
import './books.css';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/books/books';

const Books = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();
  return (
    <section className="book-container">
      <ul className="book-list">
        <li className="book">
          <div className="holder">
            <h1>{title}</h1>
            <p className="author">{author}</p>
            <div className="button-options">
              <button
                type="button"
                id="comment"
                name="comment"
                className="action"
              >
                Comments
              </button>
              <button
                type="button"
                id="remove"
                name="remove"
                className="action"
                onClick={() => {
                  dispatch(deleteBook(id));
                }}
              >
                Remove
              </button>
              <button
                type="button"
                id="edit"
                name="edit"
                className="action"
              >
                Edit
              </button>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Books;
