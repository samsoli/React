import React from "react";
import Product from "./Product/Product";
import './App.css'

// import User from "./users/User";

export default function App(){
  return(
    <div className="container">
  <Product title="Asus" image="image/151.jpg/" price="150" />
  <Product title="Acer" image="image/152.jpg/" price="160" />
  <Product title="HP" image="image/153.jpg/" price="170" />
  
  </div>






    // <div>
    //   <User name= "mohammad"  age="20"/>
    //   <User name= "sama" age="21"/>
    //   <User name= "setareh" age="22"/>
      
    // </div>
    
    
      
    
  )
}
 






//////
// class App extends  React.Component{
//   render(){
//     return(
//       <div>
//         <h1>sama</h1>
//             </div>
//     )
//   }
  
//   }
//   export default App