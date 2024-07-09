import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit'
// import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import { api } from './services/api'
// import polling from '../features/polling/pollingSlice'
// import auth from '../features/auth/authSlice'
import cartReducer from '../redux/slices/cartSlice';


export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
})

export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>;
// export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
