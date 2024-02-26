import { configureStore } from "@reduxjs/toolkit";
import groupReducer from '../features/Groups/groupSlice'
import authenticationReducer from '../pages/Login/AuthenticationSlice'


export const store =configureStore({
    reducer:{
        groups:groupReducer,
        authentication:authenticationReducer
    }
})