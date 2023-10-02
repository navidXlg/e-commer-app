import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const loginThunk = createAsyncThunk("auth/login", async (credintal) => {
    
    const response = await axios.get(`http://localhost:3001/users?username=${credintal.userName}&password=${credintal.password}`);
    return response.data;

});
export {loginThunk};