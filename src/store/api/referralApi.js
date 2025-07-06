import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const referralApi = createApi({
  reducerPath: 'referralApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getReferralSummary: builder.query({
      query: () => '/referral/summary',
    }),
    getReferralStats: builder.query({
      query: () => '/referral/stats',
    }),
    getReferralRegistrations: builder.query({
      query: () => '/referral/registrations',
    }),
    getReferralPurchases: builder.query({
      query: () => '/referral/purchases',
    }),
    getReferralLinkQr: builder.query({
      query: () => '/referral/qr',
    }),
    requestWithdrawal: builder.mutation({
      query: (data) => ({
        url: '/referral/withdrawal',
        method: 'POST',
        body: data,
      }),
    }),
    getReferralActivity: builder.query({
      query: () => '/referral/activity',
    }),
    getAllReferralWithdrawals: builder.query({
      query: () => '/referral/withdrawals',
    }),
  }),
});

export const {
  useGetReferralSummaryQuery,
  useGetReferralStatsQuery,
  useGetReferralRegistrationsQuery,
  useGetReferralPurchasesQuery,
  useGetReferralLinkQrQuery,
  useRequestWithdrawalMutation,
  useGetReferralActivityQuery,
  useGetAllReferralWithdrawalsQuery,
} = referralApi;
