import React from "react";
import Product from "./Product/Product";
import './App.css'

export default function App(){

  const allProducts = [
    {id:1 ,title:'Asus' ,image: 'image/151.jpg',price:100,count:12},
    {id:2 ,title:'Acer' ,image: 'image/152.jpg',price:180,count:10},
    {id:3 ,title:'HP' ,image: 'image/153.jpg',price:250,count:31},
  ]
  return(
    <div className="container">
  <Product title={allProducts[0].title} image={allProducts[0].image} price={allProducts[0].price} count={allProducts[0].count} />
  <Product title="Acer" image="image/152.jpg" price={180} count={10}/>
  <Product title="HP" image="image/153.jpg" price={250} count={31}/>
  
  </div>

  )
}
 
