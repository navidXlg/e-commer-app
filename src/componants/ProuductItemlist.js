import { useSelector } from "react-redux"
import Button from "./Button"
import { useState } from "react";
import ProuductCard from "./ProuductCard";


export default function Productitemlist(){

    
    const [filterType, setFilterType] = useState(null);
    const proudcts = useSelector(({prouducts : {data}}) => {
        if (!filterType) return data;
        return data.filter(item => item.category === filterType);
    });

    const renderProducts = proudcts.map(item =>{
        return <ProuductCard key={item.title} proudct={item}/>
    });
    
    const filterTypeArr = [
        {eng:"",per:"همه"},
        {eng:"Headphones",per:"هدفون"},
        {eng:"Earbuds",per:"ایرپاد"},
        {eng:"Earphones",per:"هندزفری"},
        {eng:"Neckbands",per:"نکبند"}
    ];

    const renderBtn = filterTypeArr.map(item => {
        return <Button rounded primary className ="text-xs hover:border-gray-800 hover:shadow-2xl transition-all ease-in  sm:text-sm md:text-lg"
          onClick = {() => setFilterType(item.eng)}>{item.per}</Button>;
    });
    
    return <div className="text-center pt-5 bg-zinc-200 shadow-xl rounded-xl overflow-hidden py-10 px-7 m-5">
             <h2>محصولات</h2>
             <div className="mt-5 flex items-center justify-center gap-6">
               {renderBtn}
             </div>
             <div 
             className=" grid grid-col-1 lg:grid-cols-2
             xl:grid-cols-3 text-xs sm:text-sm md:text-lg
             -mr-4 lg:mr-24 gap-7 items-center
             justify-center my-12 sm:my-24">
               {renderProducts}
             </div>
          </div>
};