import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        addProductCart(state, action){
            state.push(action.payload);
        },
        removeProductCart(state, action){
            state.filter(item => !(item.id === action.payload.id));
        }
    }
});

export const cartReducer = cartSlice.reducer;
export const {addProductCart, removeProductCart} = cartSlice.actions;