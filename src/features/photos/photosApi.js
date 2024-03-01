import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const getTokenFromLocalStorage = () => {
    console.log(localStorage.getItem('token'))
    return localStorage.getItem('token');
};



export const photosApi=createApi({
    reducerPath:'photosApi',
    baseQuery:fetchBaseQuery({baseUrl:`http://localhost:3000/`}),
    tagTypes:['photos'],
    endpoints:(builder)=>({

        getPhotos:builder.query({
            query:()=>({
                url:'photos',
                method:'GET'

            }),
           
            providesTags:['photos']
        }),

        uploadPhoto:builder.mutation({
            query:(photo)=>({
                url:'photos',
                method:'POST',
                headers: {
                    Authorization:` ${getTokenFromLocalStorage()}`,
                },
                body:photo 
            }),
            invalidatesTags:['photos']
        })
    })
})




export const {useGetPhotosQuery,useUploadPhotoMutation}=photosApi