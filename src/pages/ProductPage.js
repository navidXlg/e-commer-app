import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Button from "../componants/Button";
import {Pagination, A11y, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { useState } from "react";
import ProuductCard from "../componants/ProuductCard";



export default function ProductPage (){

    const {prouductId} = useParams();
    const id = Number(prouductId);
    const prouduct = useSelector(({prouducts:{data}}) => {
        return data.find( item => item.id === id);
    });

     const slidesSwiper = prouduct.images.map(item => {
        return <SwiperSlide>
                <img src={item} alt="product img"></img>
            </SwiperSlide>
     });

    const realtedProuducts = useSelector(({prouducts:{data}}) => {
        return data.filter(item => item.category === prouduct.category);
    })
    const renderRealtesProuducts = realtedProuducts.map(item => <ProuductCard proudct={item}/>);



    return <> <div className="grid grid-cols-2 py-16 px-5">

           <div className="info col-span-1 bg-zinc-100 shadow-xl py-10 px-7 text-zinc-600  ">

                <div>
                    <p className="text-4xl">{prouduct.title}</p>
                    <p>{prouduct.info}</p>
                    <p>{prouduct.ratinfg}</p>
                    <span className="border-b-4 w-40 inline-block"></span>
                </div>

                <div className="mt-10 text-xl">
                    <p> قیمت با تخفیف :{prouduct.originalPrice}</p>
                    <p> قیمت واقعی محصول{prouduct.finalPrice}</p>
                    <p>سود شماازاین خرید : {prouduct.originalPrice - prouduct.finalPrice }</p>
                    <span className="border-b-4 w-40 inline-block"></span>
                </div>
                <Button className ="mt-10" danger>اضافه به سبد</Button>
            </div>

            <div className="imge__slider col-span-1">
                <Swiper
                // install Swiper modules
                modules={[A11y, Navigation]}
                spaceBetween={50}
                navigation ={{ clickable: true }}
                slidesPerView={1}
                >
                {slidesSwiper}
                </Swiper>
            </div>

           </div>
           <div className="info col-span-1 m-5 bg-zinc-100 shadow-xl py-10 px-7 text-zinc-600 flex flex-col items-center justify-between">
                <p className="text-2xl font-bold text-zinc-600">محصولات مشابه</p>
                <div className="grid grid-cols-3 w-full mr-24 gap-7 items-center justify-center my-24">
                    {renderRealtesProuducts}
                </div>

           </div>
           </>
}