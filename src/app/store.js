import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query/react';
import groupReducer from '../features/Groups/groupSlice';
import loginReducer from '../pages/Login/AuthenticationSlice';
import friendsReducer from '../features/Friends/FriendsSlice';
import registrationReducer from '../features/Register/registerSlice';
import profileReducer from '../pages/Profile/ProfileSlice';
import messageReducer from '../components/MessagesComponent/messageSlice';
import postReducer from '../features/Posts/PostSlice';
import { commentSlice } from "../features/comments/commentSlice";

export const store = configureStore({
    reducer: {
        groups: groupReducer,
        friends: friendsReducer,
        authentication: loginReducer,
        registration: registrationReducer,
        profile: profileReducer,
        message: messageReducer,
        posts: postReducer,
        [commentSlice.reducerPath]: commentSlice.reducer, // Use reducerPath as the key
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(commentSlice.middleware), // Add RTK-Query middleware
});

// Setup RTK-Query listeners
setupListeners(store.dispatch);

export default store;
