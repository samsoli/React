import React from "react";
import './product.css'

export default function Product(props){
    return(
        <div>
            <h2>Product Card</h2>
            <div className="card">
                <img src={props.image}  />
                <h1>{props.title}</h1>
                <p className='price'>{props.price}$</p>
                <p>it is best smart phone for you it is best smart phone for you</p>
                <p><button>Add To Cart</button></p>
            </div>
        </div>
    )
}