import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {createApi, fetchBaseQuery} from'@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (builder) => ({
        getCars: builder.query({
            query: () => '/cars'
        }),
        addBook: builder.mutation({
            query: (bookDetasils) => ({
                url: `/addbooking/${bookDetasils.carId}`,
                method: 'PUT',
                body:bookDetasils
            })
        })
        
    })


})

export const {
    useGetCarsQuery,
    useAddBookMutation
} = apiSlice

