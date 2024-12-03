import {createSlice} from '@reduxjs/toolkit';
import {getCategories} from '../actions/categorieActions';

const initialState = {
  pending: false,
  categories: [],
  selectedCategory: '',
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCategories.pending, state => {
        state.pending = true;
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.pending = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error?.message || 'Something went wrong';
      });
  },
});
export const {setCategory} = categoriesSlice.actions;
export default categoriesSlice.reducer;
