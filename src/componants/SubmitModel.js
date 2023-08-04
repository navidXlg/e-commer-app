import  ReactDOM  from "react-dom";



export default function SubmitModel ({setOpen}){


    // Create Connection with base html to handel model component
    return ReactDOM.createPortal(
        <div>
          <div className="fixed inset-0 bg-gray-300 opacity-80 p-10" onClick={() => setOpen(0)}></div>
          <div className="fixed inset-40 bg-white p-20 flex flex-col justify-between">
          hello SubmitModel
          </div>
  
        </div>,
        document.querySelector('.model-container-submit')
    );
};