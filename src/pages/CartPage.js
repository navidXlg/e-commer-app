import { useSelector } from "react-redux";
import Cart from "../componants/Cart";
import CartEmpty from "../componants/CartEmpty";

export default function CartPage (){
    const cartLength = useSelector(({cart}) => cart.length);

    return <>
            {
            cartLength === 0 ? <CartEmpty/> : <Cart/>
            }
          </>
};