import {FaShoppingCart} from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "./Button";


export default function CartEmpty(){

    return <div className="h-screen flex flex-col gap-5 items-center justify-center text-2xl">
                <FaShoppingCart className="text-8xl text-cyan-600" />
                <p>هیچ محصولی در سبد خرید شما نمی باشد</p>
                <Link to = "/">
                    <Button danger>صفحه اصلی</Button>
                </Link>
           </div>
}