import React from "react";
import './App.css'
import User from "./users/User";

export default function App() {
   const users = [
    {id:1 , name:'Ali'},
    {id:2 , name:'Alii'},
    {id:3 , name:'Aliii'},
    {id:4 , name:'Aliiii'},
   ]
  return (
    
    <div className="container">
      <User {...users[0]}/>
      <User {...users[1]}/>
      <User {...users[2]}/>
      <User {...users[3]}/>
     
    </div>

  )
}

