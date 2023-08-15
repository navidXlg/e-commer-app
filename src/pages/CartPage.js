import { useSelector } from "react-redux"
import Cart from "../componants/Cart";
import CartEmpty from "../componants/CartEmpty";

export default function CartPage (){

    const cartLength = useSelector(({cart}) => {
        return cart.length
    });

    return<div>
            {cartLength === 0 ? <CartEmpty/> : <Cart/>}
          </div>
};