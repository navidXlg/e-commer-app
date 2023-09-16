import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const fetchProuducts = createAsyncThunk("products/fetch", async () => {
    
    const response = await axios.get(" http://localhost:3001/productsData");
    return response.data;


});

export {fetchProuducts};