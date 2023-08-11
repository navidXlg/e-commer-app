import {useState} from "react";
import { FaSistrix, FaShoppingCart, FaUser } from "react-icons/fa";
import {Link} from "react-router-dom";
import SerachBarModel from "./SearchBarModel";
import SubmitModel from "./SubmitModel";
import { useSelector } from "react-redux";


export default function Navbar(){

    // State for submit and serchBar Model Show
    const [navbarStatus, setNavbarStatus] = useState(0);

    const cartQuntite = useSelector(({cart}) => cart.length)
    console.log(cartQuntite)

    return <div className="flex justify-center text-lg">
              <div className="container px-14 py-4 flex items-center justify-between bg-blue-500">
                <div className="logo">
                    <Link to = "/">
                        تبریز رادیو
                    </Link>
                </div>

                <ul className=" flex items-center justify-between w-28">
                    <li  className="cursor-pointer">   
                        <FaSistrix onClick={() => setNavbarStatus(1)} />
                    </li>
                    <li className="relative">
                        <Link to = "/cart">
                            <FaShoppingCart />
                            <span className="bg-red-700 -top-2 -right-2  text-xs text-white py-0 px-1 rounded-3xl absolute">{cartQuntite || ""}</span>
                        </Link>
                    </li>
                    <li  className="cursor-pointer">
                        <FaUser  onClick={() => setNavbarStatus(2)}/>
                    </li>
                </ul>
              </div>
              {navbarStatus === 2 ?  <SubmitModel setOpen = {setNavbarStatus}/> : ""}
              {navbarStatus === 1 ?  <SerachBarModel setOpen = {setNavbarStatus}/> : ""}
           </div>
};