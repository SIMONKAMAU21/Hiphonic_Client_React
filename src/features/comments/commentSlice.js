
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = 'http://localhost:3000/';

export const commentSlice = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // Retrieve token from localStorage
      const token = localStorage.getItem('token');

      // If token exists, set Authorization header
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    addComment: builder.mutation({
      query: ({ postId, comment }) => ({
        url: `/comment/${postId}`,
        method: 'POST',
        body: { comment }
      }),
    }),
  }),
});

export const { useAddCommentMutation } = commentSlice;
