import Button from "./Button"
import {useForm} from "react-hook-form";
import { registerUser } from "../store";
import { useDispatch } from "react-redux";






export default function Submit({setModelMode}){

    const {handleSubmit, register} = useForm();
    const dispatch = useDispatch();
    const submitForm = (data) => {
      dispatch(registerUser(data))
    }; 
  return <> 
    <form 
    className="flex flex-col items-center
    justify-center text-sm sm:text-lg
    md:text-xlg gap-4 h-full"
    onSubmit={handleSubmit(submitForm)}>
      <div className="place-items-stretch w-full pr-4 text-start">
        <h2>ثبت نام </h2>
        <p>قبلا ثبت نام کرده اید؟ <span onClick={() => setModelMode("login")}>ورود</span></p>
      </div>
      <input 
      placeholder="نام کاربری" 
      type="text" 
      className="text-sm sm:text-lg 
      md:text-xlg rounded-lg 
      w-full px-6 py-2 placeholder-slate-500 
      outline-slate-300 border 
      border-slate-500"
      {...register("firstName")}></input>
      <input 
      placeholder="ایمیل" 
      type="email" 
      className=" text-sm sm:text-lg md:text-xlg 
      rounded-lg w-full px-6 py-2 
      placeholder-slate-500 
      outline-slate-300 border 
      border-slate-500"
      {...register("email")}></input>
      <input 
      placeholder="رمز عبور" 
      type="password" 
      className=" text-sm sm:text-lg 
      md:text-xlg 
      rounded-lg w-full 
      px-6 py-2 
      placeholder-slate-500 
      outline-slate-300 border 
      border-slate-500"
      {...register("password")}></input>
      <input 
      placeholder=" تایید رمز عبور " 
      type="password"   
      className=" text-sm sm:text-lg md:text-xlg  
      rounded-lg w-full px-6 py-2 
      placeholder-slate-500 
      outline-slate-300 border 
      border-slate-500"
      ></input>
      <Button type="submit" danger className = " text-sm sm:text-lg md:text-xlg w-full hover:shadow-lg cursor-pointer" >ثبت نام</Button>
    </form>
  </>
  };