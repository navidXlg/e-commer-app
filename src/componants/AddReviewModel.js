import ReactDOM from "react-dom";
import Button from "./Button";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addReviw } from "../store";
import "./extra.css";



export default function AddReviewModel({setOpen, item}){
    
    const dispatch = useDispatch();
    const [userTerm, setUserTerm] = useState("");
    const [reviewTerm, setReviewTerm] = useState("");

    const handelUserTerm = (event) => {
        setUserTerm(event.target.value)
    };

    const handelReviwTerm = (event) => {
        setReviewTerm(event.target.value)
    };


    const handelSubmit = (event) => {
        event.preventDefault();
        const updateInfo = {
            name:userTerm,
            review : reviewTerm,
            userId : item.id
        };
     dispatch(addReviw(updateInfo))
     setOpen(false);
    };


    const inputStyle = classNames("px-5 py-2  outline-slate-400 rounded-lg");

    return ReactDOM.createPortal(<>
        <div className="fixed inset-0 bg-gray-500 opacity-60 z-40" onClick={() => setOpen(false)}></div>
        <div className="fixed inset-40 h-fit bg-gray-200 shadow-gray-500 z-50 p-10 text-xl rounded-xl drop__animation">
            <p className="mb-10 text-2xl">اضافه کردن دیدگاه</p>
            <form className="flex flex-col gap-5" onSubmit={handelSubmit}>
                <input type="text" className={inputStyle} value={userTerm} onChange={handelUserTerm} required placeholder="نام کاربری "/>
                <input type="text" className={inputStyle} value = {reviewTerm}  onChange={handelReviwTerm}  required placeholder="دیدگاه خود را وارد کنید"/>
                <Button type = "submit" danger>ثبت دیدگاه</Button>
            </form>
        </div>
        </>,
        document.getElementById("add__reviw")
    );
};