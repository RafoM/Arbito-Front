import { configureStore } from '@reduxjs/toolkit';
import {
  authApi,
  userApi,
  translationsApi,
  paymentApi,
  referralApi,
  paymentHistoryApi,
  notificationsApi,
  arbitrageScannerApi,
  arbitrageTemplatesApi,
  notificationTemplatesApi,
  notificationBotsApi,
  blogApi,
  casesApi,
  tutorialsApi,
} from './api';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [translationsApi.reducerPath]: translationsApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
    [referralApi.reducerPath]: referralApi.reducer,
    [paymentHistoryApi.reducerPath]: paymentHistoryApi.reducer,
    [notificationsApi.reducerPath]: notificationsApi.reducer,
    [arbitrageScannerApi.reducerPath]: arbitrageScannerApi.reducer,
    [arbitrageTemplatesApi.reducerPath]: arbitrageTemplatesApi.reducer,
    [notificationTemplatesApi.reducerPath]: notificationTemplatesApi.reducer,
    [notificationBotsApi.reducerPath]: notificationBotsApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [casesApi.reducerPath]: casesApi.reducer,
    [tutorialsApi.reducerPath]: tutorialsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      translationsApi.middleware,
      paymentApi.middleware,
      referralApi.middleware,
      paymentHistoryApi.middleware,
      notificationsApi.middleware,
      arbitrageScannerApi.middleware,
      arbitrageTemplatesApi.middleware,
      notificationTemplatesApi.middleware,
      notificationBotsApi.middleware,
      blogApi.middleware,
      casesApi.middleware,
      tutorialsApi.middleware,
    ),
});

