import React from "react";
import './App.css'
import Modal from "./modal/Modal";

export default function App() {
  return (
    <div className="container">
      <h1>Code-by-Sama</h1>
      <Modal message="you fall">
      {/* <p>{this.props.message}</p> */}
      <p>success</p>
                        <ul className="cd-buttons">
                            <li><a href="#0">Yes</a></li>
                            <li><a href="#0">No</a></li>
                        </ul>
      </Modal>

    </div>

  )
}

