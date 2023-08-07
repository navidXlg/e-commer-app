import {useState} from "react";
import { FaSistrix, FaShoppingCart, FaUser } from "react-icons/fa";
import {Link} from "react-router-dom";
import SerachBarModel from "./SearchBarModel";
import SubmitModel from "./SubmitModel";


export default function Navbar(){

    // State for submit and serchBar Model Show
    const [navbarStatus, setNavbarStatus] = useState(0);

    return <div className="flex justify-center sticky">
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
                    <li>
                        <Link to = "/cart">
                            <FaShoppingCart/>
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