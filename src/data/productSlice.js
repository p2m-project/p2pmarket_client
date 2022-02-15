import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const productsAdapter = createEntityAdapter();

const initialState = productsAdapter.getInitialState({
  status: "idle",
  error: null,
});

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
});

export default productSlice.reducer;

export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectIds: selectProductIds,
} = productsAdapter.getSelectors((state) => state.products);
