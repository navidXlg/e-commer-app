import { BsTruck,  } from 'react-icons/bs';
import { BiCopyright } from 'react-icons/bi';
import { MdPayment } from 'react-icons/md';
import { LuCopyCheck } from 'react-icons/lu';


export default function Advantage(){


    return <div className="flex flex-col items-center justify-center text-xs sm:text-lg md:text-xl lg:text-2xl bg-cyan-500 text-white px-10  pt-5 pb-8">
             <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal">مزیت ما</div>

             <div className="w-full  mt-10 md:mt-20">
                <ul className="flex items-center justify-around">
                    <li className='flex items-center justify-between '>
                        <p className='ml-2'>تحویل سریع</p>
                        <span><BsTruck className=''/></span>
                    </li>
                    <li className='flex items-center justify-between'>
                        <p className='ml-2'>اطمینان محصول</p>
                        <span><BiCopyright/></span>
                    </li>
                    <li className='flex items-center justify-between '>
                        <p className='ml-2'>درگاه پرداخت امن</p>
                        <span><MdPayment/></span>
                    </li>
                    <li className='flex items-center justify-between'>
                        <p className='ml-2'>پیشنهاد های جذاب</p>
                        <span><LuCopyCheck/></span>
                    </li>
                </ul>
             </div>
           </div>

}