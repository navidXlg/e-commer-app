import { useSelector } from "react-redux"
import Cart from "../componants/Cart";
import CartEmpty from "../componants/CartEmpty";

export default function CartPage (){

    const cartLength = useSelector(({cart}) => {
        return cart.length
    });

    return<div className="mt-28">
            {cartLength === 0 ? <CartEmpty/> : <Cart/>}
          </div>
};