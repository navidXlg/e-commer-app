import ReactDOM from "react-dom";


export default function AddReviewModel({setOpen}){

    return ReactDOM.createPortal(<>
        <div className="fixed inset-0 bg-gray-500 opacity-60 z-40" onClick={() => setOpen(false)}></div>
        <div className="fixed inset-32 h-fit bg-gray-200 shadow-gray-500 z-50">
            hi
        </div>
        </>,
        document.getElementById("add__reviw")
    );
};