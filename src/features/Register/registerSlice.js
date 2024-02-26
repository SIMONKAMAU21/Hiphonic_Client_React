import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const REGISTER_API = ` http://localhost:3000/api/user`;
const initialState = {
  registrationResponse: [],
  status: "idle", // loading | succeeded | failed | error
  error: null,
};

export const registerUser = createAsyncThunk("users/register", async (user) => {
  try {
    const response = await axios.post(REGISTER_API, user);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const registerSlice = createSlice({
  name: "registration",
  initialState ,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.registration = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const selectRegisterUser = (state) => state.registration.registrationResponse;
export const getRegisterUserStatus = (state) => state.registration.status;
export const getRegisterUserError = (state) => state.registration.error;

export default registerSlice.reducer;
