import {BsTrash} from 'react-icons/bs';
import { useDispatch} from 'react-redux';
import { removeProductCart } from '../store';



export default function ProductCartItem({product}){

    const dispatch = useDispatch();
    const handelDeleteClick = (product) => {
        dispatch(removeProductCart(product.id))
    };
    

    return <div className=" border-cyan-500 border-b-2 max-h-52 flex items-center justify-around my-5">
                <div onClick={() => handelDeleteClick(product)} >
                    <BsTrash className='cursor-pointer hover:text-cyan-500 active:text-xl'/>
                </div>
                <div className="counter">
                    <p>{product.title}</p>
                    <div>
                        <p>{product.originalPrice}</p>
                        <p>{product.finalPrice}</p>
                    </div>
                </div>
                <div>
                    <img className="object-fill h-40 p-3" src={product.images[0]} alt="product"></img>
                </div>
            </div>
}