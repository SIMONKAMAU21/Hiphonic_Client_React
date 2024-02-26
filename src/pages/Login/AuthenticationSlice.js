import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = { userAuthentication: [], status: 'idle', error: null }; 

const LOGIN_API = `http://localhost:3000/api/login`;

export const authenticationUser = createAsyncThunk('user/authentication', async (userData) => {
    try {
        const response = await axios.post(LOGIN_API, userData);
        return response.data;
    } catch (error) {
        return error.message;
    }
});

export const loginSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(authenticationUser.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(authenticationUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.userAuthentication = action.payload;
            })
            .addCase(authenticationUser.rejected, (state, action) => {
                state.status='failed'
                state.error=action.error.message
            });
    }
});

export const selectLogin = state => state.authentication.userAuthentication;
export const getAuthenticateStatus = state => state.authentication.status;
export const getAuthenticateError = state => state.authentication.error;

export default loginSlice.reducer;
