import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POST_API = ` http://localhost:3000/api/post`;
const initialState = {
  posts: [],
  status: "idle", // loading | succeeded | failed | error
  error: null,
};

export const createPost = createAsyncThunk("post/create", async ({content,image}) => {
  try {
    const token = localStorage.getItem('token');
    console.log(token)
    const config = {
        headers: {
            Authorization:`${token}`
        }
    };
        
    const response = await axios.post(POST_API, {content,image},config);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const postSlice = createSlice({
  name: "posts",
  initialState ,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createPost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const selectPosts = (state) => state.posts.posts;
export const getPostStatus = (state) => state.posts.status;
export const getPostError = (state) => state.posts.error;

export default postSlice.reducer;
