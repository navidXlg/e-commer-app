import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const addReviw = createAsyncThunk("rewiv/fetch", async (id, name, date, review) => {
    const response = await axios.get(`http://localhost:3001/productsData/${id}/reviewsData`,{
        name,
        date,
        review
    });
    return response.data;
});

export {addReviw};