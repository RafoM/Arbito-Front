import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: () => '/user',
    }),
    updateUserInfo: builder.mutation({
      query: (data) => ({
        url: '/user',
        method: 'PUT',
        body: data,
      }),
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: '/user/change-password',
        method: 'POST',
        body: data,
      }),
    }),
    getIsEmailVerified: builder.query({
      query: () => '/user/email-verified',
    }),
    getVerificationCode: builder.mutation({
      query: () => ({
        url: '/user/email/code',
        method: 'POST',
      }),
    }),
    verifyEmail: builder.mutation({
      query: (code) => ({
        url: '/user/verify-email',
        method: 'POST',
        body: { code },
      }),
    }),
    uploadProfileImage: builder.mutation({
      query: (data) => ({
        url: '/user/upload-profile-image',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
  useChangePasswordMutation,
  useGetIsEmailVerifiedQuery,
  useGetVerificationCodeMutation,
  useVerifyEmailMutation,
  useUploadProfileImageMutation,
} = userApi;
