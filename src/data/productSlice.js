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
  selectAll: selectAllPosts,
  selectById: selectById,
  selectIds: selectPostIds,
} = productsAdapter.getSelectors((state) => state.products);
