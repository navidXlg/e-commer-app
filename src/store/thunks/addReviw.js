import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const addReviw = createAsyncThunk("rewiv/fetch", async (info) => {
    console.log(info)
    const response = await axios.post(` http://localhost:3001/review`,{
        name:info.name,
        review : info.review,
        userId : info.userId,
    });
    return response.data;

});
export {addReviw};