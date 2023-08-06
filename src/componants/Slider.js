// import Swiper core and required modules
import {Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { useSelector } from 'react-redux';
import Button from './Button';


export default function Slider (){
  const productListSlider = useSelector(({prouducts : {data}}) => {
    return data.slice(-5)
  });

  const renderProuducts =  productListSlider.map(item => {
    return <SwiperSlide>
            <div className = "flex items-center justify-around py-14" key={item.id}>
              <div>
                <img src={item.heroImage || item.images[0]} alt= "pic of product" className='h-96'></img>
              </div>
              <div className='flex flex-col items-center '>
                <p className='text-xl border-lime-400 border-b-2'>{item.title}</p>
                <p>{item.info}</p>
                <Button danger className = "mt-10 w-full hover:shadow-lg" >اطلاعات بیشتر</Button>
              </div>
            </div>
           </SwiperSlide>
  });

  return (
    <div className='p-5'>
    <Swiper
      // install Swiper modules
      modules={[Pagination,A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
      pagination={{ clickable: true }}
    >
     {renderProuducts}
    </Swiper>
    </div>
  );
};









{/* <Swiper
// install Swiper modules
modules={[Pagination,A11y, Autoplay]}
spaceBetween={50}
slidesPerView={1}
autoplay={{
          delay: 4000,
          disableOnInteraction: false,
      }}
pagination={{ clickable: true }}
onSwiper={(swiper) => console.log(swiper)}
onSlideChange={() => console.log('slide change')}
> */}



