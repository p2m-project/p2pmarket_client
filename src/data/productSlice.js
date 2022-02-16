import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";

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

export const getSupplierProducts = createAsyncThunk(
  "products/getProducts",
  async (credentials, { rejectWithValue }) => {
    axios.defaults.withCredentials = true;
    axios.defaults.xsrfHeaderName = "X-XSRF-TOKEN";

    await axios.get("/sanctum/csrf-cookie");

    try {
      const response = await axios.get("api/products", credentials);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export default productSlice.reducer;

export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectIds: selectProductIds,
} = productsAdapter.getSelectors((state) => state.products);
