import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const fetchRewies = createAsyncThunk( "reviewsData/fetch" , async() => {
    const response = await axios.get(`http://localhost:3001/review`);
    return response.data
});

export {fetchRewies};