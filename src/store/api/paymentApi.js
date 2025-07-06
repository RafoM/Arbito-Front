import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const paymentApi = createApi({
  reducerPath: 'paymentApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getPaymentInfo: builder.query({
      query: () => '/payment/info',
    }),
    submitTransactionHash: builder.mutation({
      query: (data) => ({
        url: '/payment/hash',
        method: 'POST',
        body: data,
      }),
    }),
    getAllCryptos: builder.query({
      query: () => '/payment/cryptos',
    }),
    getAllNetworks: builder.query({
      query: () => '/payment/networks',
    }),
    getSupportedExchangesForPayments: builder.query({
      query: () => '/payment/supported-exchanges',
    }),
    getSupportedNetworksForPayments: builder.query({
      query: () => '/payment/supported-networks',
    }),
  }),
});

export const {
  useGetPaymentInfoQuery,
  useSubmitTransactionHashMutation,
  useGetAllCryptosQuery,
  useGetAllNetworksQuery,
  useGetSupportedExchangesForPaymentsQuery,
  useGetSupportedNetworksForPaymentsQuery,
} = paymentApi;
