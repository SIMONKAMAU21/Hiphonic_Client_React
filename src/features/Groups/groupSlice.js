import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  groups: [],
  status: 'idle',
  error: null,
};

export const getGroups = createAsyncThunk('groups/getGroups', async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/group'); // replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
});

const groupSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGroups.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(getGroups.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.groups = action.payload;
    });

    builder.addCase(getGroups.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const selectAllGroups = (state) => state.groups.groups;
export const getGroupsStatus = (state) => state.groups.status;
export const getGroupsError = (state) => state.groups.error;

export default groupSlice.reducer;
