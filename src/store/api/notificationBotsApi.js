import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const notificationBotsApi = createApi({
  reducerPath: 'notificationBotsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getAllNotificationBots: builder.query({
      query: () => '/notification-bots',
    }),
    createNotificationBot: builder.mutation({
      query: (data) => ({
        url: '/notification-bots',
        method: 'POST',
        body: data,
      }),
    }),
    editNotificationBot: builder.mutation({
      query: ({ id, data }) => ({
        url: `/notification-bots/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllNotificationBotsQuery,
  useCreateNotificationBotMutation,
  useEditNotificationBotMutation,
} = notificationBotsApi;
