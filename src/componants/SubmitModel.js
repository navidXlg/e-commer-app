import  ReactDOM  from "react-dom";
import Button from "./Button";
import { useState } from "react";



export default function SubmitModel ({setOpen}){

  const [modelMode, setModelMode] = useState("login");

    const loginModel = () =>{
      return <>
        <form className="flex flex-col items-center justify-center gap-4 h-full text-sm sm:text-lg md:text-xlg">
          <div className="place-items-stretch w-full pr-4 text-start">
            <h2>ثبت نام </h2>
            <p>در رادیو تبریز جدید هستید؟<span onClick={() => setModelMode("submit")}>ثبت نام</span></p>
          </div>
          <input placeholder="نام کاربری" type="text" className=" text-sm sm:text-lg md:text-xlg rounded-lg w-full px-6 py-2 placeholder-slate-500 outline-slate-300 border border-slate-500" ></input>
          <input placeholder="رمز عبور" type="password" className="  text-sm sm:text-lg md:text-xl grounded-lg w-full px-6 py-2 placeholder-slate-500 outline-slate-300 border border-slate-500"></input>
          <Button type="submit" danger className = "w-full hover:shadow-lg cursor-pointer" >ورود</Button>
        </form>
        </>
    };

    const submitModel = () => {
      return <> 
    <form className="flex flex-col items-center justify-center text-sm sm:text-lg md:text-xlg gap-4 h-full">

      <div className="place-items-stretch w-full pr-4 text-start">
        <h2>ثبت نام </h2>
        <p>قبلا ثبت نام کرده اید؟ <span onClick={() => setModelMode("login")}>ورود</span></p>
      </div>
      <input placeholder="نام کاربری" type="text" className="text-sm sm:text-lg md:text-xlg rounded-lg w-full px-6 py-2 placeholder-slate-500 outline-slate-300 border border-slate-500" ></input>
      <input placeholder="ایمیل" type="email" className=" text-sm sm:text-lg md:text-xlg rounded-lg w-full px-6 py-2 placeholder-slate-500 outline-slate-300 border border-slate-500"></input>
      <input placeholder="رمز عبور" type="password" className=" text-sm sm:text-lg md:text-xlg rounded-lg w-full px-6 py-2 placeholder-slate-500 outline-slate-300 border border-slate-500"></input>
      <input placeholder=" تایید رمز عبور " type="password"   className=" text-sm sm:text-lg md:text-xlg  rounded-lg w-full px-6 py-2 placeholder-slate-500 outline-slate-300 border border-slate-500"></input>
      <Button type="submit" danger className = " text-sm sm:text-lg md:text-xlg w-full hover:shadow-lg cursor-pointer" >ثبت نام</Button>
    </form>
    </>
    };


    // Create Connection with base html to handel model component
    return ReactDOM.createPortal(
        <div>
          <div className="fixed inset-0 bg-gray-500 opacity-60 z-40 " onClick={() => setOpen(0)}></div>
          <div 
          className="fixed 
          top-1/4 inset-x-5 sm:inset-x-11 md:inset-x-60
          bg-gray-300 z-50 drop__animation
          shadow-gray-500 min-w-max
          shadow-2xl px-5 py-12 h-fit
          rounded-md">
            {modelMode === "submit" ? submitModel() : loginModel()}
          </div>
        </div>,
        document.querySelector('.model-container-submit')
    );
};