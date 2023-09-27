import { configureStore } from '@reduxjs/toolkit'
import { dataFetchApi } from './dataFetch'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [dataFetchApi.reducerPath]: dataFetchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataFetchApi.middleware),
})

setupListeners(store.dispatch)