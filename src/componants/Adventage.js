import { BsTruck,  } from 'react-icons/bs';
import { BiCopyright } from 'react-icons/bi';
import { MdPayment } from 'react-icons/md';
import { LuCopyCheck } from 'react-icons/lu';


export default function Advantage(){


    return <div className="flex flex-col items-center justify-center bg-cyan-500 text-white px-10  py-5">
             <div className="text-5xl font-normal">مزیت ما</div>

             <div className="w-full mt-20">
                <ul className="flex items-center justify-around">
                    <li className='flex items-center justify-between text-2xl'>
                        <p className='ml-2'>تحویل سریع</p>
                        <span><BsTruck className=''/></span>
                    </li>
                    <li className='flex items-center justify-between text-2xl'>
                        <p className='ml-2'>اطمینان محصول</p>
                        <span><BiCopyright/></span>
                    </li>
                    <li className='flex items-center justify-between text-2xl'>
                        <p className='ml-2'>درگاه پرداخت امن</p>
                        <span><MdPayment/></span>
                    </li>
                    <li className='flex items-center justify-between text-2xl'>
                        <p className='ml-2'>پیشنهاد های جذاب</p>
                        <span><LuCopyCheck/></span>
                    </li>
                </ul>
             </div>
           </div>

}