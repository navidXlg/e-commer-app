import { Link } from "react-router-dom";
import "./ProuductCard.css";


export default function ProuductCard({proudct}){
    
    return   <div className="container text-xs sm:text-sm md:text-lg ">
                <div className="card">
                    <Link to={`/product/${proudct.id}`}>
                        <div className="imgBx ">
                            <img src={proudct.images[0]} alt={proudct.info}/>
                        </div>
                    </Link>
                    <div className="contentBx">
                        <h2>{proudct.title}</h2>
                        <div className="size">
                            <h3>قیمت : </h3>
                            <span>{proudct.originalPrice}$</span>
                        </div>
                        <div className="color">
                            <h3>رنگ بندی</h3>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <Link to={`/product/${proudct.id}`}>
                            <button>مشاهده</button>
                        </Link>
                    </div>
                </div>
                </div>  
    };