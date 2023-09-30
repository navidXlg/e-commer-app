import { Link } from "react-router-dom";
import Button from "../componants/Button";





export default function ErrorFetch(){
    return <div className="flex items-center justify-center ">
            <div className=" flex flex-col items-center justify-between">
                <p className="text-9xl text-red-900 font-extrabold py-20 font-mono">404</p>
                <p className="text-2xl font-bold mb-3">مشکل ارتباط با سرور </p>
                <Link to="/" className="text-2xl mb-8"> 
                <Button danger  rounded className = " w-36 mt-10">
                صفه اصلی
                </Button>
                </Link>
            </div>
           </div>
};