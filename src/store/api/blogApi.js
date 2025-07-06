import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getAllBlogTags: builder.query({
      query: () => '/blog/tags',
    }),
    getAllBlogsByTags: builder.query({
      query: (tags) => ({
        url: '/blog',
        params: { tags },
      }),
    }),
    getBlogById: builder.query({
      query: (id) => `/blog/${id}`,
    }),
  }),
});

export const {
  useGetAllBlogTagsQuery,
  useGetAllBlogsByTagsQuery,
  useGetBlogByIdQuery,
} = blogApi;
