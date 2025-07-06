import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tutorialsApi = createApi({
  reducerPath: 'tutorialsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getTutorialTopics: builder.query({
      query: () => '/tutorials/topics',
    }),
    getTutorialDifficulties: builder.query({
      query: () => '/tutorials/difficulties',
    }),
    getTutorialsByDifficulty: builder.query({
      query: (difficulty) => ({
        url: '/tutorials',
        params: { difficulty },
      }),
    }),
    getLessonByTutorialIdAndNumber: builder.query({
      query: ({ tutorialId, number }) => ({
        url: `/tutorials/${tutorialId}/lessons/${number}`,
      }),
    }),
  }),
});

export const {
  useGetTutorialTopicsQuery,
  useGetTutorialDifficultiesQuery,
  useGetTutorialsByDifficultyQuery,
  useGetLessonByTutorialIdAndNumberQuery,
} = tutorialsApi;
