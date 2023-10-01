import { createSlice } from "@reduxjs/toolkit";
import { fetchRewies } from "../thunks/fetchRewies";
import { addReviw } from "../thunks/addReviw";
import { removeRewiew } from "../thunks/removeRewiew";



const rewieSlice = createSlice({
    name : "rewie",
    initialState : {
        data : [],
        isloading : false,
        error : null
    },
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchRewies.pending, (state, action) => {
            state.isloading = true;
        });

        builder.addCase(fetchRewies.fulfilled, (state, action) => {
            state.isloading = false;
            state.data = action.payload;
        });

        builder.addCase(fetchRewies.rejected, (state, action) => {
           state.isloading  = false ;
           state.error = action.error;
        });
        
        builder.addCase(addReviw.pending, (state, action) => {
            state.isloading  = true ;
         });
         
        builder.addCase(addReviw.fulfilled, (state, action) => {
            state.isloading  = false ;
            console.log(action.payload)
            state.data.push(action.payload);
         });
         
        builder.addCase(addReviw.rejected, (state, action) => {
            state.isloading  = false ;
            state.error = action.error;
         });
        builder.addCase(removeRewiew.pending, (state, action) => {
            state.isloading  = true;
         });
        builder.addCase(removeRewiew.fulfilled, (state) => {
            state.isloading  = false;
         });
        builder.addCase(removeRewiew.rejected, (state, action) => {
            state.isloading  = false;
            state.error = action.error;
         });
        
    }
});

export const rewiewReducer = rewieSlice.reducer;
