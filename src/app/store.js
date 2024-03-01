import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query/react';
import groupReducer from '../features/Groups/groupSlice';
import loginReducer from '../pages/Login/AuthenticationSlice';
import friendsReducer from '../features/Friends/FriendsSlice';
import registrationReducer from '../features/Register/registerSlice';
import profileReducer from '../pages/Profile/ProfileSlice';
import postReducer from '../features/Posts/PostSlice';
import { commentSlice } from "../features/comments/commentSlice";
import { EventApi } from "../features/Events/EventsSlice";

export const store = configureStore({
    reducer: {
        groups: groupReducer,
        friends: friendsReducer,
        authentication: loginReducer,
        registration: registrationReducer,
        profile: profileReducer,
        posts: postReducer,
        [commentSlice.reducerPath]: commentSlice.reducer, // Use reducerPath as the key
        [EventApi.reducerPath]:EventApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(commentSlice.middleware), // Add RTK-Query middleware
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(EventApi.middleware), // Add RTK-Query middleware

});


// Setup RTK-Query listeners
setupListeners(store.dispatch);

export default store;
