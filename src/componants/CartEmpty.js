import {FaShoppingCart} from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "./Button";


export default function CartEmpty(){

    return <div className="my-40 flex flex-col gap-5 items-center justify-center text-lg sm:text-xl md:text-2xl">
                <FaShoppingCart className="text-8xl text-cyan-600" />
                <div>
                <p className="mt-16">هیچ محصولی درسبد خرید شما نمی باشد</p>
                <Link to = "/">
                    <Button danger className = "w-full hover:opacity-80 mt-5 rounded-lg">صفحه اصلی</Button>
                </Link>
                </div>
           </div>
}