import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const casesApi = createApi({
  reducerPath: 'casesApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getAllCaseTags: builder.query({
      query: () => '/cases/tags',
    }),
    getAllCasesByTags: builder.query({
      query: (tags) => ({
        url: '/cases',
        params: { tags },
      }),
    }),
    getCaseById: builder.query({
      query: (id) => `/cases/${id}`,
    }),
  }),
});

export const {
  useGetAllCaseTagsQuery,
  useGetAllCasesByTagsQuery,
  useGetCaseByIdQuery,
} = casesApi;
