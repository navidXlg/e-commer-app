import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const registerUser  = createAsyncThunk("auth/register", async(data) => {

    console.log(data);
    return axios.post("http://localhost:3001/users",
    {
        firstName : data.firstName , email : data.email, password : data.password ,
    },
    );
});

export {registerUser};