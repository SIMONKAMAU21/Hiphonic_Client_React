

import groupReducer from '../features/Groups/groupSlice'

import loginReducer from '../pages/Login/AuthenticationSlice'


import friends from "../features/Friends/FriendsSlice";

import registrationReducer from '../features/Register/registerSlice'
import friendsReducer from '../features/Friends/FriendsSlice'
import profileReducer from '../pages/Profile/ProfileSlice'

// import messageReducer from '../components/MessagesComponent/messageSlice'
import postReducer from '../features/Posts/PostSlice'
import CommentReducer, { commentSlice } from '../features/comments/commentSlice'
import { notificationAPI } from "../features/Notifications/NotificationAPi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { configureStore } from '@reduxjs/toolkit';


export const store =configureStore({
    reducer:{
        groups:groupReducer,

        friends: friendsReducer,

        authentication:loginReducer,

        registration:registrationReducer,

        profile:profileReducer,
        // message:messageReducer,
       


        posts:postReducer,
        [commentSlice.reducerPath]:commentSlice.reducer,

        [notificationAPI.reducerPath]:notificationAPI.reducer

        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(notificationAPI.middleware),
})

setupListeners(store.dispatch)

