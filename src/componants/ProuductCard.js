
import "./ProuductCard.css";


export default function ProuductCard({proudcts}){


    const renderProductItems = proudcts.map( item => {

        return   <div class="container">
                <div class="card">
                    <div class="imgBx">
                        <img src={item.images[0]} alt={item.info}/>
                    </div>
                    <div class="contentBx">
                        <h2>{item.title}</h2>
                        <div class="size">
                            <h3>قیمت : </h3>
                            <span>{item.originalPrice}$</span>
                        </div>
                        <div class="color">
                            <h3>رنگ بندی</h3>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <a href="#">اضافه به سبد</a>
                    </div>
                </div>
                </div>  
    });

    return <div className=" grid grid-cols-3 mr-24 gap-7 items-center justify-center my-24">
            {renderProductItems}
           </div>


    
};