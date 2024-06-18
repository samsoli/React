import React from "react";
import Product from "./Product/Product";
import './App.css'

export default function App(){
  return(
    <div className="container">
  <Product title="Asus" image="image/151.jpg/" price="150" />
  <Product title="Acer" image="image/152.jpg/" price="160" />
  <Product title="HP" image="image/153.jpg/" price="170" />
  
  </div>

  )
}
 
