import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const removeRewiew = createAsyncThunk("rewiv/remove", async(id)=> {
    const response = await axios.delete(`http://localhost:3001/review/${id}`);
    return response;
});
