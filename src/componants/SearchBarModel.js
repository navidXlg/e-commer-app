import { useEffect, useState } from "react";
import  ReactDOM  from "react-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function SerachBarModel ({setOpen}){

  const [term, setTerm] = useState("");
  const handelChange = (event) => {
    setTerm(event.target.value);
  };

  // Implementing the serch term to filter the data
  const filterProduct = useSelector(({prouducts : {data}}) => {
    return data.filter( item => item.title.toLowerCase().includes(term.toLowerCase()));
  });


  const renderFilterItems = filterProduct.map(item => {
    return <div 
            key={item.id} 
            className=" p-3 bg-gray-300 border-r-4 border-red-500 mt-1" 
            >
            <Link onClick={() => setOpen(0)} to={`/prouduct/${item.id}`}>
            {item.title}
            </Link>
            </div>
  })


    // Create Connection with base html to handel model component
    return ReactDOM.createPortal(
        <div>
          <div className="fixed inset-0 bg-gray-500 opacity-60 z-40" onClick={() => setOpen(0)}></div>
          <div className="fixed inset-32 h-fit bg-gray-200 shadow-gray-500 z-50">
            <form>
                <div>
                    <input 
                    placeholder="  جست و جو محصول ..." 
                    className="bg-gray-300 w-full px-6 py-2
                     placeholder-slate-500 outline-slate-300
                      border border-slate-500"
                      value={term}
                      onChange = {handelChange} ></input>
                </div>
            </form>
            {term === "" ? "" : renderFilterItems}
          </div>
        </div>,
        document.querySelector('.model-container-search')
    );
};
