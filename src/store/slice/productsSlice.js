import {createSlice} from '@reduxjs/toolkit';
import {getProductInfo, getProducts} from '../actions/productsActions';

const initialState = {
  pending: false,
  pendingDetail: false,
  products: [],
  productInfo: {},
  bestSellerProducts: [],
  forYouProducts: [],
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, state => {
        state.pending = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.pending = false;
        state.products = action.payload;
        if (action.meta.arg.category == "women's clothing") {
          state.bestSellerProducts = action.payload;
        }
        if (action.meta.arg.category == 'jewelery') {
          state.forYouProducts = action.payload;
        }
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error?.message || 'Something went wrong';
      })
      .addCase(getProductInfo.pending, state => {
        state.pendingDetail = true;
        state.error = null;
      })
      .addCase(getProductInfo.fulfilled, (state, action) => {
        state.pendingDetail = false;
        state.productInfo = action.payload;
      })
      .addCase(getProductInfo.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error?.message || 'Something went wrong';
      });
  },
});

export default productsSlice.reducer;
