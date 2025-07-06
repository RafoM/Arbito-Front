import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://apigateway-959167850798.europe-west4.run.app/identity',
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    googleAuthLogin: builder.mutation({
      query: (token) => ({
        url: '/auth/google/login',
        method: 'POST',
        body: { token },
      }),
    }),
    verifyAccount: builder.mutation({
      query: (token) => ({
        url: '/auth/verify',
        method: 'POST',
        body: { token },
      }),
    }),
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: '/auth/forgot-password',
        method: 'POST',
        body: { email },
      }),
    }),
    requestCode: builder.mutation({
      query: (email) => ({
        url: '/auth/request-code',
        method: 'POST',
        body: { email },
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ token, newPassword }) => ({
        url: '/auth/reset-password',
        method: 'POST',
        body: { token, newPassword },
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: '/auth/register',
        method: 'POST',
        body: data,
      }),
    }),
    googleAuthRegister: builder.mutation({
      query: (token) => ({
        url: '/api/Auth/register',
        method: 'POST',
        body: { token },
      }),
    }),
    refreshToken: builder.mutation({
      query: (refreshToken) => ({
        url: '/auth/refresh-token',
        method: 'POST',
        body: { refreshToken },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGoogleAuthLoginMutation,
  useVerifyAccountMutation,
  useForgotPasswordMutation,
  useRequestCodeMutation,
  useResetPasswordMutation,
  useRegisterMutation,
  useGoogleAuthRegisterMutation,
  useRefreshTokenMutation,
} = authApi;
