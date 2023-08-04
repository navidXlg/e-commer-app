import {createSlice} from "@reduxjs/toolkit";
import { fetchProuducts } from "../thunks/fetchProducts";


const proudctSlice = createSlice({
    name : "proudct",
    initialState : {
        data : [],
        isLoading : false,
        error : null,
    },
    reducers : {
        addProudct(state, action){
            state.data.push(action.payload);
        }
    },
    extraReducers(builder){
        builder.addCase(fetchProuducts.pending, (state, action) => {
            state.isLoading = true
        });
        builder.addCase(fetchProuducts.fulfilled, (state, action) => {
            state.data = action.payload
        });
        builder.addCase(fetchProuducts.rejected, (state, action) => {
            state.error = action.error
        });
    }
});


export const {addProudct} = proudctSlice.actions;
export  const productReducer = proudctSlice.reducer;