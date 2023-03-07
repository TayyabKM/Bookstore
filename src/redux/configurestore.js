import { configureStore } from '@reduxjs/toolkit';
import { reducer as booksReducer } from './books/books';
import { reducer as categoriesReducer } from './categories/categories';

export default configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});
