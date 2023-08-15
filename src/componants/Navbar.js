import {useEffect, useState, useRef} from "react";
import { FaSistrix, FaShoppingCart, FaUser } from "react-icons/fa";
import {Link} from "react-router-dom";
import SerachBarModel from "./SearchBarModel";
import SubmitModel from "./SubmitModel";
import { useSelector } from "react-redux";
import { FiHeadphones } from 'react-icons/fi';
import {GiHamburgerMenu } from 'react-icons/gi';


export default function Navbar(){

    // State for submit and serchBar Model Show
    const [navbarStatus, setNavbarStatus] = useState(0);
    const cartQuntite = useSelector(({cart}) => cart.length)
    const element = useRef();
    // useEffect(() => {
    //     const handelScroll  = () => {
    //         const navClass = element.current.classList;
    //         window.scrollY > 150 ? navClass.add('h-fit') : navClass.remove('h-fit'); 
    //     };
    //     window.addEventListener("scroll", handelScroll);

    // },[]);

    return <div className="flex justify-center fixed top-0 w-full h-15 sm:h-20 z-40 ">
              <div className="w-full px-5 sm:px-14 py-4 flex items-center justify-between bg-cyan-500 text-white text-sm sm:text-lg md:text-xl " ref={element}>
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
                            <span className="bg-red-700 -top-2 -right-2  text-xs text-white py-0 px-1 rounded-3xl absolute">{cartQuntite || ""}</span>
                        </Link>
                    </li>
                    <li  className="cursor-pointer">
                        <FaUser  onClick={() => setNavbarStatus(2)} className="hover:text-gray-300 "/>
                    </li>
                </ul>
              </div>
              {navbarStatus === 2 ?  <SubmitModel setOpen = {setNavbarStatus}/> : ""}
              {navbarStatus === 1 ?  <SerachBarModel setOpen = {setNavbarStatus}/> : ""}
           </div>
};