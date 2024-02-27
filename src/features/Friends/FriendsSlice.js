

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = { friends: [], status: 'idle', error: null };

const FRIENDS_API = `http://localhost:3000/api/friendship`; // Update the API endpoint

// Async thunk to check if two users are friends
export const areFriends = createAsyncThunk('friends/areFriends', async ({ }) => {
  try {
    const response = await axios.get(FRIENDS_API);
    console.log("response from areFriends API", response);
    return response.data;
  } catch (error) {
    return false; // or handle the error accordingly
  }
});

export const getFriends = createAsyncThunk('friends/getFriends', async () => {
  try {
    const response = await axios.get(FRIENDS_API);
    console.log("response from the friends api", response);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {},
  extraReducers(builders) {
    builders
      .addCase(getFriends.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getFriends.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.friends = action.payload;
      })
      .addCase(getFriends.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(areFriends.fulfilled, (state, action) => {
        
      });
  }
});

export const selectAllFriends = (state) => state.friends.friends;
export const getFriendsStatus = (state) => state.friends.status;
export const getFriendsError = (state) => state.friends.error;

export default friendsSlice.reducer;
