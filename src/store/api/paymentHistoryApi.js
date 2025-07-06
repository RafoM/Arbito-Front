import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const paymentHistoryApi = createApi({
  reducerPath: 'paymentHistoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getAllPaymentHistory: builder.query({
      query: () => '/payments/history',
    }),
  }),
});

export const { useGetAllPaymentHistoryQuery } = paymentHistoryApi;
