import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const arbitrageScannerApi = createApi({
  reducerPath: 'arbitrageScannerApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getAllSearchTemplates: builder.query({
      query: () => '/arbitrage-scanner/templates',
    }),
    getAllScannerExchanges: builder.query({
      query: () => '/arbitrage-scanner/exchanges',
    }),
    getAllScannerNetworks: builder.query({
      query: () => '/arbitrage-scanner/networks',
    }),
    createSearchTemplate: builder.mutation({
      query: (data) => ({
        url: '/arbitrage-scanner/template',
        method: 'POST',
        body: data,
      }),
    }),
    getScannerResults: builder.query({
      query: (params) => ({
        url: '/arbitrage-scanner/results',
        params,
      }),
    }),
  }),
});

export const {
  useGetAllSearchTemplatesQuery,
  useGetAllScannerExchangesQuery,
  useGetAllScannerNetworksQuery,
  useCreateSearchTemplateMutation,
  useGetScannerResultsQuery,
} = arbitrageScannerApi;
