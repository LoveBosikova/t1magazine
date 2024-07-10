import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit'
import cartReducer from '../redux/slices/cartSlice';
import { productsApi } from './slices/productsSlice';


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
