import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getProductsApi = createApi({
  reducerPath: "getproductsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),

    getProductById: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } =
  getProductsApi;
