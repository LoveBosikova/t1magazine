import cartReducer from "../src/redux/slices/cartSlice";

import { updateCart, initialState, increase, decrease, deleteItem } from "../src/redux/slices/cartSlice";


import { describe, it, expect } from "vitest";

describe('Cart slice state, positive', ()=> {

    const testCart= {
        "id": 1,
        "products": [
            {
            "id": 144,
            "title": "Cricket Helmet",
            "price": 44.99,
            "quantity": 4,
            "total": 179.96,
            "discountPercentage": 11.47,
            "discountedTotal": 159.32,
            "thumbnail": "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/thumbnail.png"
            },
        ],
        "total": 4794.8,
        "discountedTotal": 4288.95,
        "userId": 142,
        "totalProducts": 5,
        "totalQuantity": 20
    }

    const stateCurtResult = {
        cartId: 1,
        cartItems: [
            {
            id: 144,
            title: 'Cricket Helmet',
            price: 44.99,
            quantity: 4,
            total: 179.96,
            discountPercentage: 11.47,
            discountedTotal: 159.32,
            thumbnail: 'https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/thumbnail.png'
            }
        ],
        isLoading: true,
        amount: 20,
        total: 4794.8,
        discountedTotal: 4288.95
    }

    const increaseItemCountState = {
        cartId: 1,
        cartItems: [
            {
            id: 144,
            title: 'Cricket Helmet',
            price: 44.99,
            quantity: 5,
            total: 179.96,
            discountPercentage: 11.47,
            discountedTotal: 159.32,
            thumbnail: 'https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/thumbnail.png'
        }
        ],
        isLoading: true,
        amount: 20,
        total: 4794.8,
        discountedTotal: 4288.95
    }

    const decreaseItemCountState = {
        cartId: 1,
        cartItems: [
            {
            id: 144,
            title: 'Cricket Helmet',
            price: 44.99,
            quantity: 3,
            total: 179.96,
            discountPercentage: 11.47,
            discountedTotal: 159.32,
            thumbnail: 'https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/thumbnail.png'
        }
        ],
        isLoading: true,
        amount: 20,
        total: 4794.8,
        discountedTotal: 4288.95
    }

    const deleteCartItemState = {
        cartId: 1,
        cartItems: [
            {
            id: 144,
            title: 'Cricket Helmet',
            price: 44.99,
            quantity: 0,
            total: 179.96,
            discountPercentage: 11.47,
            discountedTotal: 159.32,
            thumbnail: 'https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/thumbnail.png'
            }
        ],
        isLoading: true,
        amount: 20,
        total: 4794.8,
        discountedTotal: 4288.95
    }

    it('check initial state', () => {
        expect(cartReducer(undefined, {type: 'unknown'})).toStrictEqual(initialState);
    })

    it('check cartSlice - updating cart', () => {
        const state = cartReducer(initialState, updateCart(testCart));
        expect(state).toStrictEqual(stateCurtResult);
    })

    it('check cartSlice - increase cartItem', () => {
        const loadedState = cartReducer(initialState, updateCart(testCart))
        const state = cartReducer(loadedState, increase(144))
        expect(state).toStrictEqual(increaseItemCountState)
    })

    it('check cartSlice - decrease cartItem', () => {
        const loadedState = cartReducer(initialState, updateCart(testCart))
        const state = cartReducer(loadedState, decrease(144))
        expect(state).toStrictEqual(decreaseItemCountState)
    })

    it('check cartSlice - decrease cartItem', () => {
        const loadedState = cartReducer(initialState, updateCart(testCart))
        const state = cartReducer(loadedState, deleteItem(144))
        expect(state).toStrictEqual(deleteCartItemState)
    })
})

describe('Cart slice state, negative', ()=> {

    const testCart= {
        "id": 1,
        "products": [
            {
            "id": 144,
            "title": "Cricket Helmet",
            "price": 44.99,
            "quantity": 4,
            "total": 179.96,
            "discountPercentage": 11.47,
            "discountedTotal": 159.32,
            "thumbnail": "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/thumbnail.png"
            },
        ],
        "total": 4794.8,
        "discountedTotal": 4288.95,
        "userId": 142,
        "totalProducts": 5,
        "totalQuantity": 20
    }

    it('check cartSlice - increase cartItem - no item found', () => {
        const loadedState = cartReducer(initialState, updateCart(testCart))
        const state = cartReducer(loadedState, increase(1))
        expect(state).toStrictEqual(state)
    })

    it('check cartSlice - decrease cartItem - no item found', () => {
        const loadedState = cartReducer(initialState, updateCart(testCart))
        const state = cartReducer(loadedState, decrease(1))
        expect(state).toStrictEqual(state)
    })

    it('check cartSlice - decrease cartItem - no item found', () => {
        const loadedState = cartReducer(initialState, updateCart(testCart))
        const state = cartReducer(loadedState, deleteItem(1))
        expect(state).toStrictEqual(state)
    })
})
