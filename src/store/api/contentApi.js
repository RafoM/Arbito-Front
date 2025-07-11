import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contentApi = createApi({
  reducerPath: 'contentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://apigateway-959167850798.europe-west4.run.app',
  }),
  endpoints: (builder) => ({
    getAvailableLanguages: builder.query({
      query: () => '/content/api/Language',
    }),
  }),
});

export const { useGetAvailableLanguagesQuery } = contentApi;
