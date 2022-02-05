import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  token: "",
  status: "",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
});

export default authSlice.reducer;
