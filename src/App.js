import { useEffect } from "react";
import Navbar from "./componants/Navbar"
import { fetchProuducts } from "./store";
import { useDispatch } from "react-redux";

export default function App (){

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProuducts());
  },[dispatch]);

  return <>
            <Navbar/>
         </>
}