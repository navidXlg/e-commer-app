import  ReactDOM  from "react-dom";
import Submit from "./Submit";
import { useState } from "react";
import Login from "./Login";



export default function UserState ({setOpen}){


  // This state specify model between submit and login
  const [modelMode, setModelMode] = useState("login");


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
            {modelMode === "submit" ? <Submit setModelMode={setModelMode}/> : <Login setModelMode = {setModelMode} />}
          </div>
        </div>,
        document.querySelector('.model-container-submit')
    );
};