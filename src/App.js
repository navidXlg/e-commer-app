import { useEffect } from "react";
import Navbar from "./componants/Navbar"
import { fetchProuducts } from "./store";
import { Routes, Route } from "react-router";
import { useDispatch } from "react-redux";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./componants/Footer";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import ScrollToTop from "./componants/ScrollToTop";

export default function App (){
  // console.log(window.scrollY)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProuducts());
  },[dispatch]);
  
  return <>
            <Navbar/>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element = {<HomePage/>}></Route>
                <Route path="*" element = {<ErrorPage/>}></Route>
                <Route path="/cart" element = {<CartPage/>}></Route>
                <Route path= "/prouduct/:prouductId" element = {<ProductPage/>}></Route>
            </Routes>
            <Footer/>
         </>
};