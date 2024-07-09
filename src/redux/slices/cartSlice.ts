import axios from "axios";
import { 
    createAsyncThunk,
    createSlice,
    AsyncThunk 
} from "@reduxjs/toolkit";


import { BASE_URL } from "../../api/api";
import { IFeature } from "../../components/ui/featureCard/featureCard";

export interface ICartState {
    cartItems: IFeature[]
    isLoading: boolean,
    amount?: number,
    total?: number,
    discountedTotal: number
}

const initialState: ICartState = {
    cartItems: [],
    isLoading: true,
    amount: 0,
    total: 0,
    discountedTotal: 0
}

export const getCartItems : AsyncThunk<any, number, any> = createAsyncThunk('cart/getCartItems', 
    async (num: number) => {
    try {
        const resp = await axios(`${BASE_URL}/carts/${num}`);
        return resp.data
    } catch (error) {
        return console.log(error);
    }
});

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
},
    extraReducers: (builder) => {
        builder.addCase(getCartItems.pending, (state, action) => {
            state.isLoading = true;
        }),
        builder.addCase(getCartItems.fulfilled, (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.cartItems = action.payload.products; // Список продуктов в корзине
            state.amount = action.payload.totalQuantity; // Количество всех продуктов в корзине
            state.total = action.payload.total; // Стоимость всех продуктов в корзине
            state.discountedTotal = action.payload.discountedTotal; // Стоимость всех продуктов с учётом скидки
        }),
        builder.addCase(getCartItems.rejected, (state, action) => {
            console.log(action);
            state.isLoading = false;
        })
    },
});

// export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;