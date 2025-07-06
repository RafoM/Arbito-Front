import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const notificationTemplatesApi = createApi({
  reducerPath: 'notificationTemplatesApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getAllTemplates: builder.query({
      query: () => '/notification-templates',
    }),
    createTemplate: builder.mutation({
      query: (data) => ({
        url: '/notification-templates',
        method: 'POST',
        body: data,
      }),
    }),
    editTemplate: builder.mutation({
      query: ({ id, data }) => ({
        url: `/notification-templates/${id}`,
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
} = notificationTemplatesApi;
