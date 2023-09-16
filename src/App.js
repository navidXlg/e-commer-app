import { useEffect } from "react";
import Navbar from "./componants/Navbar"
import { fetchProuducts } from "./store";
import { Routes, Route } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./componants/Footer";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import ScrollToTop from "./componants/ScrollToTop";
import ErrorFetch from "./componants/ServerFetch";
import PropagateLoader from "react-spinners/PropagateLoader";




export default function App (){

  const {isLoading, error} = useSelector(({prouducts}) => prouducts)

  // Fetching all products when app starts
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProuducts());
  },[dispatch]);

  // Handeling Error when fetchin data feom server and loading spinner
  if(error){return <ErrorFetch/>}
  if(isLoading){return<PropagateLoader className="text-center mt-52" color="#36d7b7" size={50}/>}

  
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