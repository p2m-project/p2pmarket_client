import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  token: "",
  status: "",
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
});

export default productSlice.reducer;
