// Actions
const CHECK_STATUS = 'bookstore-1/categories/CREATE';

// Reducer
export const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case CHECK_STATUS: {
      return 'Under Construction';
    }

    default: {
      return state;
    }
  }
};

// Action Creators
export const checkStatus = () => ({ type: CHECK_STATUS });