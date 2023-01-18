import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: ' https://white-panda-task-server.vercel.app' }),
    tagTypes: ['cars'],

    endpoints: (builder) => ({
        getCars: builder.query({
            query: () => '/cars',
            providesTags: ['cars']
        }),

        addBook: builder.mutation({
            query: (bookDetasils) => ({
                url: `/addbooking/${bookDetasils.carId}`,
                method: 'PUT',
                body: bookDetasils
            }),
            invalidatesTags: ['cars']
        }),
        updateBookingDetails: builder.mutation({
            query: (details) => ({
                url: `/updatebooking/${details.carId}`,
                method: 'PUT',
                body: details

            }),
            invalidatesTags:['cars']
        }),
        deleteBook: builder.mutation({
            query: ({ id }) => ({
                url: `/deletebooking/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['cars']
        })

    })


})

export const {
    useGetCarsQuery,
useUpdateBookingDetailsMutation,
    useAddBookMutation,
    useDeleteBookMutation
} = apiSlice

