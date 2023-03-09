import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { booksReducer } from './books/books';
import { categoriesReducer } from './categories/categories';

const root = combineReducers(
  {
    booksReducer,
    categoriesReducer,
  },
);

const store = configureStore({ reducer: root });

export default store;
