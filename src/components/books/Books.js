import React from 'react';
import PropTypes from 'prop-types';
import './books.css';

const Books = (props) => {
  const { title, author } = props;
  return (
    <section className="book-container">
      <ul className="book-list">
        <li className="book">
          <div className="holder">
            <h1>{title}</h1>
            <p className="author">{author}</p>
            <div className="button-options">
              <button type="button" id="comment" name="comment" className="action">Comments</button>
              <button type="button" id="remove" name="remove" className="action">Remove</button>
              <button type="button" id="edit" name="edit" className="action">Edit</button>
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
};

export default Books;
