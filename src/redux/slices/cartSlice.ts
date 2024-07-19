import axios from "axios";
import { 
    createAsyncThunk,
    createSlice,
    AsyncThunk 
} from "@reduxjs/toolkit";

import { BASE_URL } from "../../api/api";
import { IFeature } from "../../components/ui/featureCard/featureCard";

export interface ICartState {
    cartId: number,
    cartItems: IFeature[],
    isLoading: boolean,
    amount?: number,
    total?: number,
    discountedTotal: number
}

const initialState: ICartState = {
    cartId: 0,
    cartItems: [],
    isLoading: true,
    amount: 0,
    total: 0,
    discountedTotal: 0
}

// запрос карты по айди пользователя. Берем первую корзину
export const getCartItems : AsyncThunk<any, number, any> = createAsyncThunk('cart/getCartItems', 
    async (num: number) => {
    try {
        const resp = await axios(`${BASE_URL}/carts/user/${num}`);
        return resp.data.carts[0]
    } catch (error) {
        return console.log(error);
    }
});

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        updateCart: (state, { payload }) => {
            state.cartId = payload.id; // состояние загрузки корзины 
            state.cartItems = payload.products; // Список продуктов в корзине
            state.amount = payload.totalQuantity;  // Количество всех продуктов в корзине
            state.total = payload.total; // Стоимость всех продуктов в корзине
            state.discountedTotal = payload.discountedTotal; // Стоимость всех продуктов с учётом скидки
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload)
            cartItem ? (cartItem.quantity = cartItem.quantity + 1) : state.cartItems = state.cartItems;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload)
            cartItem ? (cartItem.quantity = cartItem.quantity - 1) : state.cartItems = state.cartItems;;
        },
        deleteItem: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload)
            cartItem ? (cartItem.quantity = 0) : state.cartItems = state.cartItems;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getCartItems.pending, (state, action) => {
            state.isLoading = true;
        }),
        builder.addCase(getCartItems.fulfilled, (state, action) => {
            console.log(action.payload, action.payload.id);
            state.isLoading = false; // состояние загрузки корзины 
            state.cartId = action.payload.id; // айди корзины
            state.cartItems = action.payload.products; // Список продуктов в корзине
            state.amount = action.payload.totalQuantity; // Количество всех продуктов в корзине
            state.total = action.payload.total; // Стоимость всех продуктов в корзине
            state.discountedTotal = action.payload.discountedTotal; // Стоимость всех продуктов с учётом скидки
        }),
        builder.addCase(getCartItems.rejected, (state, action) => {
            state.isLoading = false;
        })
    },
});

export const { increase, decrease, deleteItem, updateCart } = cartSlice.actions;

export default cartSlice.reducer;