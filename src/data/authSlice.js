import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  name: "",
  email: "",
  token: "",
  status: "",
  error: null,
};

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (credentials, { rejectWithValue }) => {
    axios.defaults.withCredentials = true;
    axios.defaults.xsrfHeaderName = "X-XSRF-TOKEN";

    await axios.get("/sanctum/csrf-cookie");

    try {
      const response = await axios.post("api/auth/login", credentials);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
      //   if (
      //     Object.hasOwn(err, "response") &&
      //     Object.hasOwn(err.response, "data")
      //   ) {
      //     console.log("Here");
      //     return rejectWithValue(err.response.data);
      //   } else {
      //     return rejectWithValue(err.message);
      //   }
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(signIn.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.token = action.payload.token;
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.error = "";
    });
    builder.addCase(signIn.pending, (state, action) => {
      state.status = "pending";
    });
  },
});

export default authSlice.reducer;
