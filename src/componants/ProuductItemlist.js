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
    
    const filterTypeArr = [
        {id:1, eng:"",per:"همه"},
        {id:2,eng:"Headphones",per:"هدفون"},
        {id:3,eng:"Earbuds",per:"ایرپاد"},
        {id:4,eng:"Earphones",per:"هندزفری"},
        {id:5,eng:"Neckbands",per:"نکبند"}
    ];

    
    return <div className="text-center pt-5 bg-zinc-200 shadow-xl rounded-xl overflow-hidden py-10 px-7 m-5">
             <h2>محصولات</h2>
             <div className="mt-5 flex items-center justify-center gap-6">
               {
                filterTypeArr.map(item => <Button rounded primary key={item.id} className ="text-xshover:border-gray-800 hover:shadow-2xl transition-all ease-in  sm:text-sm md:text-lg" onClick = {() => setFilterType(item.eng)}>{item.per}</Button>)
               }
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