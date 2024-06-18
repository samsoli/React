import React from "react";
import './product.css'

export default function Product({title , image , price , count}){

    // let {title , image , price , count} = props

    return(
        count && 
        <div>
                 <h2>Product Card</h2>
                 <div className="card">
                    <img src={image}  />
                    <h1>{title}</h1>
                     <p className='price'>{price}$</p>
                     <p>it is best smart phone for you it is best smart phone for you</p>
                    <p><button>Add To Cart</button></p>
                 </div>
             </div>
    )

    
    // if (props.count >0) {
    //     return(
    //         <div>
    //             <h2>Product Card</h2>
    //             <div className="card">
    //                 <img src={props.image}  />
    //                 <h1>{props.title}</h1>
    //                 <p className='price'>{props.price}$</p>
    //                 <p>it is best smart phone for you it is best smart phone for you</p>
    //                 <p><button>Add To Cart</button></p>
    //             </div>
    //         </div>
    //     ) 
    // }
    //     return null
    
    
}