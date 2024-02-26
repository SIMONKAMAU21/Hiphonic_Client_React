import { configureStore } from "@reduxjs/toolkit";
import groupReducer from '../features/Groups/groupSlice'
import loginReducer from '../pages/Login/AuthenticationSlice'


export const store =configureStore({
    reducer:{
        groups:groupReducer,
        authentication:loginReducer
    }
})