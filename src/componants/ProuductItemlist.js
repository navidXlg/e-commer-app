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
        return <ProuductCard proudct={item}/>
    })

    
    return<div className="text-center pt-5">
            <h2 >محصولات</h2>
            <div className="mt-5 flex items-center justify-center gap-6">
                <Button danger onClick = {() => setFilterType("")}>همه</Button>
                <Button danger onClick = {() => setFilterType("Headphones")}>هدفون</Button>
                <Button danger onClick = {() => setFilterType("Earbuds")}>ایرپاد</Button>
                <Button danger onClick = {() => setFilterType("Earphones")}>هندزفری د</Button>
                <Button danger onClick = {() => setFilterType("Neckbands")}>نکبند</Button>
            </div>
            <div className=" grid grid-cols-3 mr-24 gap-7 items-center justify-center my-24">
            {renderProducts}
            </div>
          </div>
};