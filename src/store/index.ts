import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reduces/cart'
import api from '../servisces/api'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaulMiddleware) =>
    getDefaulMiddleware().concat(api.middleware),
})

export type RootReducer = ReturnType<typeof store.getState>
