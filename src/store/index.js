import { configureStore } from "@reduxjs/toolkit";
import { productReducer, addProudct } from "./slices/ProuductSlice";
import { cartReducer, addProductCart, removeProductCart } from "./slices/CartSlice";
import { rewiewReducer } from "./slices/RewiewSlice";
import { authRedeucer } from "./slices/authSlice";



const store = configureStore({
    reducer : {
        prouducts : productReducer,
        cart : cartReducer,
        rewie : rewiewReducer,
        auth : authRedeucer
    }
});

export {addProudct, productReducer, cartReducer, addProductCart, removeProductCart, rewiewReducer};
export default store;
export * from "./thunks/fetchProducts";
export * from "./thunks/fetchRewies";
export * from "./thunks/addReviw";
export * from "./thunks/registerUser";

