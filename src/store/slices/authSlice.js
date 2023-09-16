import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "../thunks/loginThunk";




const authSlice = createSlice({
    name:"auth",
    initialState : {
        user : null,
        isLoading : false,
        succese : false,
        error : null
    },

    extraReducers(builder){
        builder.addCase(loginThunk.pending, (state) => {
            state.isLoading = true;
            state.user = null;
        });
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.succese = false;
        });
        builder.addCase(loginThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
});


export const authRedeucer = authSlice.reducer