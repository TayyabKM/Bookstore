import React from 'react';
import PropTypes from 'prop-types';
import './books.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import spinnerImage from '../../image/spinnerImage.png';

const Books = (props) => {
  const {
    title, author, id, category,
  } = props;
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(removeBook(id));
  };
  return (
    <li className="book">
      <div className="holder">
        <p className="category">{category}</p>
        <h1>{title}</h1>
        <p className="author">{author}</p>
        <div className="button-options">
          <button
            type="submit"
            id="comment"
            name="comment"
            className="action"
          >
            Comments
          </button>
          <button
            type="submit"
            id="remove"
            name="remove"
            className="action"
            onClick={handleSubmit}
          >
            Remove
          </button>
          <button
            type="submit"
            id="edit"
            name="edit"
            className="action"
          >
            Edit
          </button>
        </div>
      </div>
      <div className="status">
        <img src={spinnerImage} alt="progression circle" className="circle" />
        <div>
          <p className="percentage">64%</p>
          <p className="status-details">Completed</p>
        </div>
        <div className="divider" />
        <section className="position">
          <h2 className="position-head">CURRENT CHAPTER</h2>
          <p className="position-details">Chapter 1</p>
          <button type="button" name="update" id="progress-button">UPDATE PROGRESS</button>
        </section>
      </div>
    </li>
  );
};

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Books;
