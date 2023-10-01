import { Link } from "react-router-dom";
import "./ProuductCard.css";


export default function ProuductCard({proudct}){
    
    return   <div class="container text-xs sm:text-sm md:text-lg ">
                <div class="card">
                    <Link to={`/product/${proudct.id}`}>
                        <div class="imgBx ">
                            <img src={proudct.images[0]} alt={proudct.info}/>
                        </div>
                    </Link>
                    <div class="contentBx">
                        <h2>{proudct.title}</h2>
                        <div class="size">
                            <h3>قیمت : </h3>
                            <span>{proudct.originalPrice}$</span>
                        </div>
                        <div class="color">
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