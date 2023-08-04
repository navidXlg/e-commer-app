import { configureStore } from "@reduxjs/toolkit";
import { productReducer, addProudct } from "./slices/ProuductSlice";



const store = configureStore({
    reducer : {
        prouducts : productReducer
    }
});

export {addProudct, productReducer};
export default store;
export * from "./thunks/fetchProducts";

