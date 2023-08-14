import { useEffect, useState } from 'react';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { VscAdd } from 'react-icons/vsc';
import Button from './Button';
import AddReviewModel from './AddReviewModel';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRewies } from '../store';

export default function ProductRewie({prouduct}){


    const [isModelOpen, setModelOpen] = useState(false);
    const [reviewCount, setReviwCount] = useState(2);
    const dispatch = useDispatch() 
    useEffect(() => {
        dispatch(fetchRewies())
    },[dispatch]);

    const review = useSelector(({rewie : {data}}) =>{
        return data.filter(item => item.userId === prouduct.id)
    });

    const reviews = review.slice(0, reviewCount);
    const handelClick = () => {
        setReviwCount(reviewCount => reviewCount +2)
    };

    const renderRewie = reviews.map(item => {

        return <div className='mb-3'>
                <div className='flex items-center justify-between gap-5 shadow-xl border-s-fuchsia-600 p-5'>
                 <div>
                    <p>دیدگاه: {item.review}</p>
                    <p>کاربر: {item.name}</p>
                 </div>
                 <div className="like_dislike flex items-center justify-between gap-5 text-2xl text-red-600">
                    <AiOutlineDislike className='hover:text-red-950 active:text-3xl'/>
                    <AiOutlineLike className='hover:text-red-950 active:text-3xl'/>
                 </div>        
                 </div>
                </div> 
    });

    return <div className='mt-32 text-lg'>
            <div className='w-fit'>
              <p>دیدگاه کاربران</p>
              <span className="border-b-4 w-full border-cyan-400 inline-block"></span>
            </div>
            <div className='overflow-y-auto max-h-64 scroll-smooth'>
            {renderRewie}
            </div>
            <div className='flex items-center justify-between'>
                <Button onClick = {handelClick}>
                نمایش بیشتر
                </Button>
                <VscAdd onClick={() => setModelOpen(true)} />
                {isModelOpen && <AddReviewModel  item = {prouduct} setOpen = {setModelOpen}/>}
            </div>
            </div>
};