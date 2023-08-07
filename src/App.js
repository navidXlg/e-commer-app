import { useEffect } from "react";
import Navbar from "./componants/Navbar"
import { fetchProuducts } from "./store";
import { Routes, Route } from "react-router";
import { useDispatch } from "react-redux";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./componants/Footer";

export default function App (){

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProuducts());
  },[dispatch]);

  return <>
            <Navbar/>
            <Routes>
                <Route path="/" element = {<HomePage/>}></Route>
                <Route path="*" element = {<ErrorPage/>}></Route>
            </Routes>
            <Footer/>
         </>
}