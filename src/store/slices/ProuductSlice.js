import {createSlice} from "@reduxjs/toolkit";
import { fetchProuducts } from "../thunks/fetchProducts";


const proudctSlice = createSlice({
    name : "proudct",
    initialState : {
        data : [],
        isLoading : false,
        error : null,
        succes : false
    },
    reducers : {
        addProudct(state, action){
            state.data.push(action.payload);
        }
    },
    extraReducers(builder){
        builder.addCase(fetchProuducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchProuducts.fulfilled, (state, action) => {
            state.data = action.payload;
            state.succes = true;
            state.isLoading = false;
        });
        builder.addCase(fetchProuducts.rejected, (state, action) => {
            state.error = action.error
            state.isLoading = false;
        });
    }
});


export const {addProudct} = proudctSlice.actions;
export  const productReducer = proudctSlice.reducer;