import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios';


const initialState = { userAuthentication: [], status: 'idle', error: null }; 

const LOGIN_API=`http://localhost:3000/api/login`


export const authenticationUser=createAsyncThunk('user/authentication',async()=>{
    try {

            const response=await axios.post(LOGIN_API,userData)
            return response.data
        
    } catch (error) {
         return  error.message
    }
})



export const AuthenticaionSlice=createSlice({
    name:'userAuthentication',
    initialState,
    reducers:{},
    extraReducers(builders){
        builders
            .addCase(authenticationUser.pending,(state,action)=>{
                state.status='loading'
            })
            .addCase(authenticationUser.fulfilled,(state,action)=>{
                state.status='success'
                state.userResponse=action.payload
            })
            .addCase(authenticationUser.error,(state,action)=>{
                state.status='failed'
                state.error=action.error.message
            })
    }
});


export const selectAuthenticate =state=>state.userAuthentication.userAuthentication
export const getAuthenticateStatus=state=>state.userAuthentication.status
export const getAuthenticatError=state=>state.userAuthentication.error


export default AuthenticaionSlice.reducer