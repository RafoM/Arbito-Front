import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const arbitrageTemplatesApi = createApi({
  reducerPath: 'arbitrageTemplatesApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getAllTemplates: builder.query({
      query: () => '/arbitrage-templates',
    }),
    createTemplate: builder.mutation({
      query: (data) => ({
        url: '/arbitrage-templates',
        method: 'POST',
        body: data,
      }),
    }),
    editTemplate: builder.mutation({
      query: ({ id, data }) => ({
        url: `/arbitrage-templates/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllTemplatesQuery,
  useCreateTemplateMutation,
  useEditTemplateMutation,
} = arbitrageTemplatesApi;
