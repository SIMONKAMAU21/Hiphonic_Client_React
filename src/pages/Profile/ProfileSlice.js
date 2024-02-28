import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = { profile: [], status: 'idle', error: null }; 

const USER_API =`http://localhost:3000/api/user`




export const getUserDetails = createAsyncThunk('user/profile', async (user_id) => {
    try {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: ` ${token}`
            }
        };
        const response = await axios.get(`${USER_API}/${user_id}`, config); 
        console.log(response.data);
        return response.data;
    } catch (error) {
        return error;
    }
});


export const updateUserDetails=createAsyncThunk('user/edit', async ({username,email,tagname}) => {
    try {
        const token = localStorage.getItem('token');
        const user_id=localStorage.getItem('user_id');
        console.log(token)
        

        const config = {
            headers: {
                Authorization: ` ${token}`
            }
        };
        const response = await axios.patch(`${USER_API}`,{username,email,tagname},config); 
        console.log(response.data);
        return response.data;
    } catch (error) {
        return error;
    }
});











export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getUserDetails.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(getUserDetails.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.profile = action.payload;
            })
            .addCase(getUserDetails.rejected, (state, action) => {
                state.status='failed'
                state.error=action.error.message
            })
            .addCase(updateUserDetails.pending,(state,action)=>{
                state.status='loading';
            })
            .addCase(updateUserDetails.fulfilled,(state,action)=>{
                state.status='succeeded';
                state.profile=action.payload
            })
            .addCase(updateUserDetails.rejected,(state,action)=>{
                state.error='failed'
                state.error=action.error.message
            })
            
    }
});


export const selectProfile =state=>state.profile.profile
export const getProfileStatus=state=>state.profile.status
export const getProfileError=state=>state.profile.error


export default profileSlice.reducer