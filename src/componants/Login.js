import Button from "./Button"
import {useForm} from "react-hook-form"; 
import { loginThunk } from "../store";
import { useDispatch} from "react-redux";


export default function Login({setModelMode}){

  const {handleSubmit, register} = useForm();
  const dispatch = useDispatch();
  const submitForm = (data) => {
    dispatch(loginThunk(data))
  };
  // there is bug that how can i hande luser login in site ant the conncetion with server
  // const {user, isLoading, error} = useSelector(({auth}) => auth )
    return <>
      <form className="flex flex-col items-center
      justify-center gap-4 h-full text-sm
      sm:text-lg md:text-xlg"
      onSubmit={handleSubmit(submitForm)}>
        <div className="place-items-stretch w-full pr-4 text-start">
          <h2>ورود </h2>
          <p>در رادیو تبریز جدید هستید؟<span onClick={() => setModelMode("submit")}>ثبت نام</span></p>
        </div>
        <input {...register("userName")} placeholder="نام کاربری" type="text" className=" text-sm sm:text-lg md:text-xlg rounded-lg w-full px-6 py-2 placeholder-slate-500 outline-slate-300 border border-slate-500" ></input>
        <input {...register("password")} placeholder="رمز عبور" type="password" className="  text-sm sm:text-lg md:text-xl grounded-lg w-full px-6 py-2 placeholder-slate-500 outline-slate-300 border border-slate-500"></input>
        <Button type ="submit" danger className = "w-full hover:shadow-lg cursor-pointer" >
          ورود
        </Button>
      </form>
      </>
  };
