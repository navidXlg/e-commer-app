import { useState } from "react";
import  ReactDOM  from "react-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./extra.css"


export default function SerachBarModel ({setOpen}){


  // Handeling input term in searchbox
  const [term, setTerm] = useState("");
  const handelChange = (event) => {
    setTerm(event.target.value);
  };

  // Implementing the serch term to filter the data
  const {filterProduct, isLoading} = useSelector(({prouducts}) => {
    const filterProduct = prouducts.data.filter( item => item.title.toLowerCase().includes(term.toLowerCase()));
    return {
      filterProduct,
      isLoading : prouducts.isLoading,
    };
  });



  const renderFilterItems = filterProduct.map(item => {
    return <div 
            key={item.id} 
            className=" p-1 sm:p-3 bg-gray-300 border-r-4
            text-xs sm:text-sm md:text-lg
          border-red-500 mt-1 hover:bg-gray-200"  
            >
            <Link onClick={() => setOpen(0)} to={`/prouduct/${item.id}`}>
            {item.title}
            </Link>
            </div>
  })


    // Create Connection with base html to handel model component
    return ReactDOM.createPortal(
        <div>
          <div className="fixed inset-0 bg-gray-500 opacity-60 z-40 " onClick={() => setOpen(0)}></div>
          <div className="fixed inset-32 h-fit bg-gray-200 shadow-gray-500 z-50 drop__animation">
            <form>
                <div>
                    <input 
                    placeholder = {isLoading === true ? "در حال ارتباط": ".... جست و جو محصول"} 
                    className="bg-gray-300 w-full px-1 sm:px-6 py-1
                     placeholder-slate-500 outline-slate-300
                      text-xs sm:text-sm md:text-lg"
                      value={term}
                      onChange = {handelChange} ></input>
                </div>
            </form>
            {term !== "" ? renderFilterItems : null }
          </div>
        </div>,
        document.querySelector('.model-container-search')
    );
};
