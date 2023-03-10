import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addAPI, fetchAPI, removeAPI } from '../../components/API/API';

// Actions
const ADD = 'bookstore-1/books/ADD';
const UPDATE = 'bookstore-1/books/UPDATE';
const DELETE = 'bookstore-1/books/DELETE';

const fetchBooks = createAsyncThunk(
  UPDATE,
  async () => {
    const response = await fetchAPI();
    return response;
  },
);

const addBook = createAsyncThunk(
  ADD,
  async (Obj) => {
    await addAPI(Obj);
    return Obj;
  },
);

const removeBook = createAsyncThunk(
  DELETE,
  async (id) => {
    await removeAPI(id);
    return id;
  },
);

const initialState = {
  status: null,
  entities: [],
};

const handleBookSlice = createSlice({
  name: 'handleBook',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const newBookList = [];
      Object.entries(action.payload).forEach((item) => {
        newBookList.push({
          id: item[0],
          title: item[1][0].title,
          author: item[1][0].author,
        });
      });
      return {
        ...state,
        entities: newBookList,
      };
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      const newBook = {
        id: action.payload.item_id,
        title: action.payload.title,
        author: action.payload.author,
      };
      return {
        ...state,
        entities: [...state.entities, newBook],
      };
    });
    builder.addCase(removeBook.fulfilled, (state, action) => ({
      ...state,
      entities: state.entities.filter((book) => book.id !== action.payload),
    }));
  },
});

export default handleBookSlice.reducer;
export { fetchBooks, addBook, removeBook };
