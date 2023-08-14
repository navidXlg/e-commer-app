import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const fetchRewies = createAsyncThunk( "reviewsData/fetch" , async(id) => {
    const response = await axios.get(`http://localhost:3001/productsData/${id}/reviewsData`);
    return response.data
});

export {fetchRewies};