import { configureStore } from "@reduxjs/toolkit";
import { productReducer, addProudct } from "./slices/ProuductSlice";
import { cartReducer, addProductCart, removeProductCart } from "./slices/CartSlice";



const store = configureStore({
    reducer : {
        prouducts : productReducer,
        cart : cartReducer
    }
});

export {addProudct, productReducer, cartReducer, addProductCart, removeProductCart};
export default store;
export * from "./thunks/fetchProducts";

