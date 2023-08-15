import { Link } from "react-router-dom";
import Button from "../componants/Button";
import { useEffect } from "react";



export default function ErrorPage(){
    useEffect(() => {
        setTimeout( ()=>{
            window.history.pushState({}, "", "/");
        },7000)

        return () => {
            clearTimeout();
        }
    });
       
    

    return <div className="flex items-center justify-center">
            <div className=" flex flex-col items-center justify-between">
                <p className="text-9xl text-red-900 font-extrabold py-20">404</p>
                <p className="text-2xl mb-3">آدرس اشتباهی را جستجو کرده اید</p>
                <Link to="/" className="text-2xl mb-8"> 
                <Button danger>
                صفه اصلی
                </Button>
                </Link>
            </div>
           </div>
}