import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Button from "../componants/Button";
import { A11y,Navigation } from 'swiper/modules';
import { useDispatch } from "react-redux";
import { addProductCart } from "../store";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import ProuductCard from "../componants/ProuductCard";
import ProductRewie from "../componants/ProductRewiw";






export default function ProductPage (){
    // Geting id for product
    const dispatch = useDispatch();
    const {prouductId} = useParams();
    console.log(prouductId)
    const id = Number(prouductId);
    const prouduct = useSelector(({prouducts:{data, isLoading, error}}) => { 
        return data.find( item => item.id === id);
    });

    const realtedProuducts = useSelector(({prouducts:{data}}) => {
        return data.filter(item => item.category === prouduct.category);
    })
    
    if (!prouduct || !prouduct.images) {
        return <div>Loading...</div>; // or display a loading state
      }

    const handelClick = () => {
      dispatch(addProductCart(prouduct))
    };

    // Slider slides for componant
     const slidesSwiper = prouduct.images.map(item => {
        return <SwiperSlide>
                <img src={item} alt="product img"></img>
            </SwiperSlide>
     });

    // Realted products for page
    const renderRealtesProuducts = realtedProuducts.map(item => <ProuductCard proudct={item}/>);

    return <> 
           <div className="grid lg:grid-cols-2 py-16 px-5 mt-28 ">
           <div 
           className="info col-span-1
          bg-zinc-100 shadow-xl 
            py-10 px-7 text-zinc-600
            rounded-xl order-2 mt-20
            lg:order-1 lg:mt-0">
                <div className="w-fit text-sm sm:text-lg md:text-xl lg:text-3xl">
                    <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl">{prouduct.title}</p>
                    <p>{prouduct.info}</p>
                    <p>{prouduct.rating}</p>
                    <span className="border-b-4 w-full border-cyan-400 inline-block"></span>
                </div>
                <div className="mt-10 text-sm sm:text-lg md:text-xl lg:text-3xl w-fit">
                    <p> قیمت با تخفیف :{prouduct.originalPrice}</p>
                    <p> قیمت واقعی محصول{prouduct.finalPrice}</p>
                    <p>سود شماازاین خرید : {prouduct.originalPrice - prouduct.finalPrice }</p>
                    <span className="border-b-4 w-full border-cyan-400 inline-block"></span>
                </div>
                <Button className ="mt-10" danger onClick = {handelClick}>اضافه به سبد</Button>
                <div>
                    <ProductRewie prouduct={prouduct}/>
                </div>
            </div>
            <div className="imge__slider col-span-1 order-1 lg:order-2">
                <Swiper
                modules={[A11y, Navigation]}
                spaceBetween={50}
                navigation ={{ clickable: true }}
                slidesPerView={1}
                className="max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl"
                >
                {slidesSwiper}
                </Swiper>
            </div>
           </div>
           <div className="info rounded-xl col-span-1 m-5 bg-zinc-100 shadow-xl py-10 px-7 text-zinc-600 flex flex-col items-center justify-between">
                <p className="text-2xl font-bold text-zinc-600">محصولات مشابه</p>
                <div className="grid grid-col-1 lg:grid-cols-2
                xl:grid-cols-3 text-xs sm:text-sm md:text-lg
                -mr-4 lg:mr-10 gap-7 items-center
                justify-center my-12 sm:my-24">
                    {renderRealtesProuducts}
                </div>
           </div>
           </>
};