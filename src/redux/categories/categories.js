// Actions
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// Reducer
const handleStatus = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';

    default:
      return state;
  }
};

// Action Creators
export const checkStatus = () => ({
  type: CHECK_STATUS,
  text: 'Under Construction',
});

export default handleStatus;
