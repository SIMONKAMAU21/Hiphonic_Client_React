import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = localStorage.getItem('token')
console.log(token)
export const EventApi = createApi({
  reducerPath: "Events",

  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getAllEvents: builder.query({
      query: () => ({
        url:`event`,
        method:"GET"
   

      })
    }),
    addEvent: builder.mutation({
      query: (event) => ({
        url: `event`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: event, 
       
      })
    })
    
  })
});
export const {useGetAllEventsQuery,useAddEventMutation} = EventApi;








