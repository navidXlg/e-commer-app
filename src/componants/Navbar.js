import {useState} from "react";
import { FaSistrix, FaShoppingCart, FaUser } from "react-icons/fa";
import {Link} from "react-router-dom";
import SerachBarModel from "./SearchBarModel";
import { useSelector } from "react-redux";
import { FiHeadphones } from 'react-icons/fi';
import UserState from "./UserState";


export default function Navbar(){
    // State for submit and serchBar Model Show
    const [navbarStatus, setNavbarStatus] = useState(0);
    const cartNumber = useSelector(({cart}) => cart.length);

    // Handeling Model show 
    const renderModel = navbarStatus === 2 ?  <UserState setOpen = {setNavbarStatus}/> : navbarStatus === 1 ?  <SerachBarModel setOpen = {setNavbarStatus}/> : null;


    return <div className="flex justify-center fixed top-0 w-full h-15 sm:h-20 z-40 ">
              <div className="w-full px-5 sm:px-14 py-4 flex items-center justify-between bg-cyan-500 text-white text-sm sm:text-lg md:text-xl ">
                <div className="">
                    <Link to = "/" className="flex items-center justify-between gap-2 transition-all ease-in duration-200 hover:text-gray-300 ">
                        <FiHeadphones/>
                        رادیو تبریز
                    </Link>
                </div>

                <ul className=" flex items-center justify-end gap-2 sm:gap-0 sm:justify-between w-28">
                    <li  className="cursor-pointer ">   
                        <FaSistrix onClick={() => setNavbarStatus(1)} className="hover:text-gray-300 "/>
                    </li>
                    <li className="relative ">
                        <Link to = "/cart">
                            <FaShoppingCart className="hover:text-gray-300"/>
                            <span className="bg-red-700 -top-2 -right-2  text-xs text-white py-0 px-1 rounded-3xl absolute">{cartNumber || ""}</span>
                        </Link>
                    </li>
                    <li  className="cursor-pointer">
                        <FaUser  onClick={() => setNavbarStatus(2)} className="hover:text-gray-300 "/>
                    </li>
                </ul>
              </div>
              {renderModel}
           </div>
};