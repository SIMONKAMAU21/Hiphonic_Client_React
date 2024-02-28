import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const getTokenFromLocalStorage = () => {
    return localStorage.getItem('token');
};


export const notificationAPI=createApi({
    reducerPath:'notificationApi',
    baseQuery:fetchBaseQuery({baseUrl:`http://localhost:3000/`}),
    tagTypes:['Notifications'],
    endpoints:(builder)=>({
        getNotifications:builder.query({
            query:()=>({
                url:'notification',
                method:'GET',
                headers: {
                    Authorization: ` ${getTokenFromLocalStorage()}`,
                }

            }),
           
            providesTags:['Notifications']
        }),
        addNotifications:builder.mutation({
            query:(notification)=>({
                url:'notification',
                method:'POST',
                body:notification
            }),
            invalidatesTags:['Notifications']
        }),
        deleteNotification:builder.mutation({
            query:(id)=>({
                url:`notification/${id}`,
                method:'DELETE'
            }),
            invalidatesTags:['Notifications']
        })

    })
})


export const {useGetNotificationsQuery,useAddNotificationMutation,useDeleteNotificationMutation}=notificationAPI