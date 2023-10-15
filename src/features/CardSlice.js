import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: []
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cart.find(
                (item) => item.id === action.payload.id
            );
            if (existingItem) {
                state.cart = state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else state.cart.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },
        incrementQty: (state, action) => {

        },
        decerementQty: (state, action) => {
            state.cart = state.cart.map((item) =>
                item.id === action.payload.id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
        }
    }
});

export const { addToCart, removeFromCart, incrementQty, decerementQty } = cartSlice.actions;
export default cartSlice.reducer;