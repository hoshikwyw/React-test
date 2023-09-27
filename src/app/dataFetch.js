import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataFetchApi = createApi({
  reducerPath: "dataFetchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://jsonplaceholder.typicode.com/`,
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => `posts`,
    }),
  }),
});

export const { useGetDataQuery } = dataFetchApi;
