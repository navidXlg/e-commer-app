import {useState, useEffect, useRef} from "react";
import { GoChevronDown } from "react-icons/go";

export default function SubmitDropdown({options, value, onChange}){

    const[isOpen, setOpen] = useState(false);
    useEffect(()=>{
        const handeler = (event)=>{ 
            if(!divElement.current){
                return;
            }

            if(!divElement.current.contains(event.target)){
                setOpen(false)
            }
        };
        document.addEventListener('click', handeler);
        return ()=>{
            document.removeEventListener('click', handeler);
        }
    }, []);

    const divElement = useRef();


    const render = options.map((option)=>{
        return(
            <div className="hover:bg-blue-200" onClick={()=>handelClickOption(option)} key={option.label}>{option.label}</div>
        )
    });

    const handelClickOption = (option)=>{
        setOpen(false);
        onChange(option);
    };



     const handelClickClose = ()=>{
        setOpen(!isOpen);
    };


    return(
        <div ref={divElement}>
            <div className="border border-sky-500 rounded w-32 text-center shadow-md flex items-center justify-between p-2" onClick={handelClickClose}>{value?.label || 'Select ...'}<GoChevronDown/></div>
            <div className="border border-sky-500 rounded w-32 text-center shadow-md ">{isOpen && render}</div>
        </div>
    )
};
