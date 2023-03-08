import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    deleteBook: (state, action) => state.filter((book) => book.id !== action.payload.id),
    updateBook: (state, action) => {
      const index = state.findIndex((book) => book.id === action.payload.id);
      state[index] = action.payload;
    },
    loadBooks: (state, action) => action.payload,
  },
});

export const {
  addBook, deleteBook, updateBook, loadBooks,
} = booksSlice.actions;
export default booksSlice.reducer;
