
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const URL = import.meta.env.VITE_BASE_URL


export const productApi = createApi({

    reducerPath: "products",
    baseQuery: fetchBaseQuery({baseUrl: URL}),

    endpoints:(builder)=>({
        getAllProducts:builder.query({

            query:()=>("/products")

        }),

        postData: builder.mutation({
            query:({data,token})=>({
                url:"/register",
                method:"POST",
                body:data,
                headers:{
                    'Content-type':'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
        }),

        loginData: builder.mutation({
            query: (data) => ({
                url: "/login",
                method: "POST",
                body: data,
                headers: {
                    'Content-type': 'application/json',
                }
            })
        })


    })
})


        

export const {useGetAllProductsQuery,usePostDataMutation, useLoginDataMutation}  = productApi