import { configureStore } from "@reduxjs/toolkit";
import groupReducer from '../features/Groups/groupSlice'

import loginReducer from '../pages/Login/AuthenticationSlice'


import friends from "../features/Friends/FriendsSlice";

import registrationReducer from '../features/Register/registerSlice'
import friendsReducer from '../features/Friends/FriendsSlice'
import profileReducer from '../pages/Profile/ProfileSlice'
import postReducer from '../features/Posts/PostSlice'


export const store =configureStore({
    reducer:{
        groups:groupReducer,

        friends: friendsReducer,

        authentication:loginReducer,

        registration:registrationReducer,

        profile:profileReducer,

        posts:postReducer
    }
})