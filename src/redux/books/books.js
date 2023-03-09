// Actions
const ADD = 'bookstore-1/books/ADD';
const UPDATE = 'bookstore-1/books/UPDATE';
const DELETE = 'bookstore-1/books/DELETE';
const LOAD = 'bookstore-1/books/LOAD';

const defaultState = [
  {
    id: 1,
    author: 'Suzanne Collins',
    title: 'The Hunger Games',
  },

  {
    id: 2,
    author: 'Leo Toystoy',
    title: 'Anna Karenina',
  },

  {
    id: 3,
    author: 'Franck Herbert',
    title: 'Dune',
  },
];

// Reducer
export const booksReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case ADD:
      return [...state, {
        id: action.id,
        title: action.title,
        author: action.author,
      }];

    case UPDATE: {
      return state;
    }

    case DELETE:
      return state.filter((book) => (book.id !== action.id));

    case LOAD: {
      return state;
    }

    default: {
      return state;
    }
  }
};

// Action Creators
export const createBook = (id, title, author) => ({
  type: ADD,
  id,
  title,
  author,
});

export const loadBooks = () => ({ type: LOAD });

export const deleteBook = (id) => ({ type: DELETE, id });

export const updateBook = (book) => ({ type: UPDATE, book });
