// messagesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = { messages: [], status: 'idle', error: null };

const MESSAGES_API = `http://localhost:3000/message`; // Update the API endpoint

// Async thunk to send a message
export const sendMessage = createAsyncThunk('messages/sendMessage', async ({ sender_id, receiver_id, content }) => {
  try {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `${token}`
      }
    };
    const response = await axios.post(`${MESSAGES_API}/new`, { sender_id, receiver_id, content }, config);
    console.log("response from sendMessage API", response);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

// Async thunk to get all messages between two users
export const getMessages = createAsyncThunk('messages/getMessages', async ({ sender_id, receiver_id }) => {
  try {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `${token}`
      }
    };
    const response = await axios.get(`${MESSAGES_API}/conversation`, { params: { sender_id, receiver_id }, config });
    console.log("response from getMessages API", response);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers(builders) {
    builders
      .addCase(sendMessage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // You might want to update state.messages or trigger a getMessages action here
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Add similar cases for getMessages action if needed
  }
});

export const selectAllMessages = (state) => state.messages.messages;
export const getMessagesStatus = (state) => state.messages.status;
export const getMessagesError = (state) => state.messages.error;

export default messagesSlice.reducer;
