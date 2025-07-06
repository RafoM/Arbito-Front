import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const translationsApi = createApi({
  reducerPath: 'translationsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getAllTranslations: builder.query({
      query: () => '/translations',
    }),
  }),
});

export const { useGetAllTranslationsQuery } = translationsApi;
