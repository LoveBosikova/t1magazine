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

export const getCartItems : AsyncThunk<any, number, any> = createAsyncThunk('cart/getCartItems', 
    async (num: number) => {
    try {
        const resp = await axios(`${BASE_URL}/carts/user/${num}`);
        console.log( resp.data.carts[0]);
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
            console.log(payload);
            state.cartId = payload.id;
            state.cartItems = payload.products; // Список продуктов в корзине
            state.amount = payload.totalQuantity;  // Количество всех продуктов в корзине
            state.total = payload.total; // Стоимость всех продуктов в корзине
            state.discountedTotal = payload.discountedTotal; // Стоимость всех продуктов с учётом скидки
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload)
            cartItem.quantity = cartItem.quantity + 1;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload)
            cartItem.quantity = cartItem.quantity - 1;
        },
        deleteItem: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload)
            cartItem.quantity = 0;
        },
        // calculateTotals: (state) => {
        //     let amount = 0;
        //     let total = 0;
        //     state.cartItems.forEach((item) => {
        //         amount += item.quantity;
        //         total += item.quantity * item.price;
        //     });
        //     state.amount = amount;
        //     state.total = total;
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(getCartItems.pending, (state, action) => {
            state.isLoading = true;
        }),
        builder.addCase(getCartItems.fulfilled, (state, action) => {
            state.isLoading = false;
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