import { Pagination, A11y, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { useSelector } from 'react-redux';
import Button from './Button';




export default function Carosul(){

  const carosulItems = useSelector(({prouducts : {data}}) => data.slice(-5));


  return <div className='m-5 mt-24 shadow-lg rounded-xl overflow-hidden'>
          <Swiper modules={[Pagination,A11y, Autoplay]} spaceBetween={100} slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false,}} pagination={{ clickable: true }}>
          {
            carosulItems.map(item =>
              <SwiperSlide key={item.id} className="bg-hero-pattern text-white">
              <div className = "flex items-center justify-around py-14 relative " key={item.id}>
                <div>
                  <img src={item.heroImage || item.images[0]} alt= "pic of product" className='h-40 sm:h-60 md:h-72 lg:h-96'></img>
                </div>
                <div className='flex flex-col items-center text-xs sm:text-sm md:text-lg'>
                  <p className='border-lime-400 text-3xl uppercase mb-10  border-b-2'>{item.title}</p>
                  <p>{item.info}</p>
                  <Link to={`product/${item.id}`}>
                    <Button danger rounded className = " outline-none mt-10 w-full hover:shadow-lg text-xs sm:text-sm md:text-lg" >اطلاعات بیشتر</Button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            )
          }
          </Swiper>
        </div>
};