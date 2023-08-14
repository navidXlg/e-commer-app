import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect, useLayoutEffect } from "react";
import Button from "../componants/Button";
import { A11y,Navigation } from 'swiper/modules';
import { useDispatch } from "react-redux";
import { fetchProuducts } from "../store";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import ProuductCard from "../componants/ProuductCard";
import ProductRewie from "../componants/ProductRewiw";



export default function ProductPage (){

    // We have bug here when we reload the page our
    // app crash
    // Geting id for product
    const {prouductId} = useParams();
    const id = Number(prouductId);
    const prouduct = useSelector(({prouducts:{data, isLoading, error}}) => { 
        console.log("first" + performance.now())    
        return data.find( item => item.id === id);
    });

    // Slider slides for componant
     const slidesSwiper = prouduct.images.map(item => {
        console.log("secound" + performance.now())
        return <SwiperSlide>
                <img src={item} alt="product img"></img>
            </SwiperSlide>
     });

    // Realted products for page
    const realtedProuducts = useSelector(({prouducts:{data}}) => {
        return data.filter(item => item.category === prouduct.category);
    })
    const renderRealtesProuducts = realtedProuducts.map(item => <ProuductCard proudct={item}/>);



    return <> <div className="grid grid-cols-2 py-16 px-5 mt-28 ">
           <div className="info col-span-1 bg-zinc-100 shadow-xl py-10 px-7 text-zinc-600 rounded-xl">
                <div className="w-fit">
                    <p className="text-4xl">{prouduct.title}</p>
                    <p>{prouduct.info}</p>
                    <p>{prouduct.rating}</p>
                    <span className="border-b-4 w-full border-cyan-400 inline-block"></span>
                </div>
                <div className="mt-10 text-xl w-fit">
                    <p> قیمت با تخفیف :{prouduct.originalPrice}</p>
                    <p> قیمت واقعی محصول{prouduct.finalPrice}</p>
                    <p>سود شماازاین خرید : {prouduct.originalPrice - prouduct.finalPrice }</p>
                    <span className="border-b-4 w-full border-cyan-400 inline-block"></span>
                </div>
                <Button className ="mt-10" danger>اضافه به سبد</Button>
                <div>
                    <ProductRewie prouduct={prouduct}/>
                </div>
            </div>
            <div className="imge__slider col-span-1">
                <Swiper
                modules={[A11y, Navigation]}
                spaceBetween={50}
                navigation ={{ clickable: true }}
                slidesPerView={1}
                >
                {slidesSwiper}
                </Swiper>
            </div>
           </div>
           <div className="info rounded-xl col-span-1 m-5 bg-zinc-100 shadow-xl py-10 px-7 text-zinc-600 flex flex-col items-center justify-between">
                <p className="text-2xl font-bold text-zinc-600">محصولات مشابه</p>
                <div className="grid grid-cols-3 w-full mr-24 gap-7 items-center justify-center my-24">
                    {renderRealtesProuducts}
                </div>
           </div>
           </>
}