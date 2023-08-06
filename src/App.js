import { useEffect } from "react";
import Navbar from "./componants/Navbar"
import { fetchProuducts } from "./store";
import { Routes, Route } from "react-router";
import { useDispatch } from "react-redux";
import HomePage from "./pages/HomePage";

export default function App (){

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProuducts());
  },[dispatch]);

  return <>
            <Navbar/>
            <Routes>
                <Route path="/" element = {<HomePage/>}></Route>
            </Routes>
         </>
}