import Button from "./Button";
import { BiLogoFacebook } from 'react-icons/bi';
import { BiLogoLinkedin } from 'react-icons/bi';
import { FaTwitter } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

export default function Footer(){

    return<> <div className="grid grid-cols-3  text-xs sm:text-sm md:text-lg lg:text-xl py-10 px-6  bg-zinc-800 text-zinc-400 border border-b border-zinc-500">
              <div className="contact__us col-span-1">
                <form className="flex flex-col items-center">
                    <label className="mb-7">بااشتراک گذاری ایمیل خود می توانیدازاخبار جدیدازمحصولات وتخفیف ها اگاه شوید</label>
                    <input type="email" placeholder="آدرس ایمیل" className="mb-2 bg-transparent w-full border border-zinc-400 py-1 px-4" ></input>
                    <Button type ="submit" danger className = "" >ثبت</Button>
                </form>
              </div>
              <div className="info col-span-2  flex justify-around items-center ">
                    <ul className="col-span-1">
                        <li className="font-bold mb-3  text-xs sm:text-lg md:text-xl lg:text-2xl">رادیو تبریز</li>
                        <li>درباره ما</li>
                        <li>ارتباط با ما</li>
                        <li>مراکز</li>
                    </ul>
                    <ul className="col-span-1">
                        <li className="font-bold mb-3  text-xs sm:text-lg md:text-xl lg:text-2xl">اطلاعات</li>
                        <li>لغوسفارش</li>
                        <li>بازگشت سفارش</li>
                        <li>گارانتی</li>
                    </ul>
                </div>
           </div>
           <div className="bg-zinc-800 text-zinc-400 flex  text-xs sm:text-lg md:text-xl lg:text-2xl items-center justify-between py-5 px-6">
                <p>Navid Khaleghi corpration| 2023 Radio Tabriz</p>
                <div className="flex items-center  gap-x-2">
                    <BiLogoLinkedin/>
                    <BiLogoFacebook/>
                    <BsInstagram/>
                    <FaTwitter/>
                </div>
           </div>
           </>
        
};