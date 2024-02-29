import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const comment_API = ` http://localhost:3000/comment`;
const initialState = {
  comments: [],
  status: "idle", // loading | succeeded | failed | error
  error: null,
};

export const createcomment = createAsyncThunk("comment/create", async ({content}) => {
  try {
    const token = localStorage.getItem('token');
    console.log(token)
    const config = {
        headers: {
            Authorization:`${token}`
        }
    };
    
    const response = await axios.post(comment_API, {content},config);
    console.log(response, "response from api")
    return response.data;
  } catch (error) {
    return error.message;
  }
});
// const comment_API = ` http://localhost:3000/api/comment`;
export const getcomments = createAsyncThunk(
  "comment/get",
  async()=>{
    const token = localStorage.getItem('token')
    const config={
      headers:{
        Authorization:`${token}`
      }
    }
    const response= await axios.get(comment_API,config);
     console.log(response)
    return response.data
  }
);

export const commentSlice = createSlice({
  name: "comments",
  initialState ,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createcomment.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(createcomment.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.comments = action.payload;
      })
      .addCase(createcomment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getcomments.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getcomments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.comments = action.payload;
      })
      .addCase(getcomments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const selectcomments = (state) => state.comments.comments;
export const getcommentStatus = (state) => state.comments.status;
export const getcommentError = (state) => state.comments.error;

export default commentSlice.reducer;
