/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    status: 'Under Construction',
  },
  reducers: {
    checkStatus: (state) => {
      state.status = 'Under Construction';
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
