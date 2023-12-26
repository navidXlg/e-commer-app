import { useSelector } from "react-redux"
import Button from "./Button"
import { useState } from "react";
import ProuductCard from "./ProuductCard";
import classNames from "classnames";


export default function Productitemlist(){
 

    const [filterType, setFilterType] = useState(null);
    const proudcts = useSelector(({prouducts : {data}}) => {
        if (!filterType) return data;
        return data.filter(item => item.category === filterType);
    });
    
    const filterTypeArr = [
        {id:1, englishTitle:null,title:"همه"},
        {id:2,englishTitle:"Headphones",title:"هدفون"},
        {id:3,englishTitle:"Earbuds",title:"ایرپاد"},
        {id:4,englishTitle:"Earphones",title:"هندزفری"},
        {id:5,englishTitle:"Neckbands",title:"نکبند"}
    ];

    const itemStyle = (item) => classNames("text-xs transition-all duration-250 ease-in sm:text-sm md:text-lg",{
        "border-b-4 border-cyan-400 pb-1" : filterType === item.englishTitle
    });

    
    return <div className=" text-gray-500 text-center pt-5 mb-20  bg-zinc-200 shadow-xl rounded-xl overflow-hidden py-10 px-7 mx-8">
             <div className="flex items-center gap-16 mt-10 mr-24">
                <h2 className="font-bold">دسته بندی محصولات :</h2>
                <div className=" flex items-center justify-center gap-8">
                {
                    filterTypeArr.map(item => <p key={item.id} className = {itemStyle(item)} onClick = {() => setFilterType(item.englishTitle)}>{item.title}</p>)
                }
                </div>
             </div>
              <div 
              className=" grid grid-col-1 lg:grid-cols-2
              xl:grid-cols-3 text-xs sm:text-sm md:text-lg
              -mr-4 lg:mr-24 gap-7 items-center
              justify-center my-12 sm:my-24">
               {
                proudcts.map(item =><ProuductCard key={item.id} proudct={item}/>)
               }
             </div>
          </div>
    };