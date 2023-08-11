import { useSelector } from "react-redux"
import Button from "../componants/Button"
import ProductCartItem from "../componants/productCartItem"

export default function CartPage (){

    const cartProducts = useSelector(({cart}) => {
        return cart;
    });
    

    const originalPrice = cartProducts.reduce((acc, item) => acc+item.originalPrice,0);
    const finalPrice  = cartProducts.reduce((acc, item) => acc+item.finalPrice,0);

    
    const renderCartProuducts = cartProducts.map(item => <ProductCartItem product={item}/>);

    return <div className="cart__continer grid grid-cols-3 text-lg scroll-m-72">
              <div className=" bg-zinc-100 shadow-xl py-10 px-7 text-zinc-600 m-5 col-span-1 flex flex-col gap-5">
                <p className="text-2xl font-bold">سفارش ها</p>
                <div className="flex items-center justify-between">
                    <p>قیمت واقعی</p>
                    <p className="text-green-500 font-bold">{originalPrice}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p>سود شما از این خرید</p>
                    <p className="text-green-500 font-bold">{originalPrice - finalPrice}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p>ارسال</p>
                    <p className="text-green-500 font-bold">رایگان</p>
                </div>    
                <span className="border-b-4 text-zinc-700 w-full inline-block"></span>
                <div className="flex items-center justify-between text-xl">
                    <p>قیمت کل</p>
                    <p>{finalPrice}</p>
                </div>    
                <Button danger>پرداخت</Button>
              </div>

              <div className="component col-span-2 bg-zinc-100 shadow-xl py-10 px-7 m-5 text-zinc-600">
                {renderCartProuducts}
              </div>
           </div>
};