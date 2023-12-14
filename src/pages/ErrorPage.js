import { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";



export default function ErrorPage(){

    const history = useNavigate();
    useEffect(() => {
        setTimeout( ()=>{
            history("/");
        },7000)
        return () => {
            clearTimeout();
        }
    });

    return <div className="flex items-center justify-center mt-24">
            <div className=" flex flex-col items-center justify-between">
                <p className="text-9xl text-red-900 font-extrabold py-20">404</p>
                <p className="text-2xl mb-3">آدرس اشتباهی را جستجو کرده اید</p>
                <p className="text-2xl mb-3">شما در حال انتفال به صفحه اصلی هستید</p>
                <PropagateLoader className="text-center m-16" color="#36d7b7" size={20} />
            </div>
           </div>
}