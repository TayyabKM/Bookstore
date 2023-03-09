// Actions
const CHECK_STATUS = 'bookstore-1/categories/CREATE';

// Reducer
export const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return [
        ...state,
        action.text,
      ];

    default:
      return state;
  }
};

// Action Creators
export const checkStatus = () => ({
  type: CHECK_STATUS,
  text: 'Under Construction',
});
