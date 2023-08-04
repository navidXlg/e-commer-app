import  ReactDOM  from "react-dom";




export default function SerachBarModel ({setOpen}){


    // Create Connection with base html to handel model component
    return ReactDOM.createPortal(
        <div>
          <div className="fixed inset-0 bg-gray-500 opacity-60" onClick={() => setOpen(0)}></div>
          <div className="fixed inset-32 h-fit bg-gray-200 shadow-gray-500 ">
            <form>
                <div>
                    <input 
                    placeholder="  جست و جو محصول ..." 
                    className="bg-gray-400 w-full px-6 py-2
                     placeholder-slate-500 outline-slate-300
                      border border-slate-500" ></input>
                </div>
            </form>
          </div>
        </div>,
        document.querySelector('.model-container-search')
    );
};
