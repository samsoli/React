import React from "react";
import './App.css'
import Modal from "./modal/Modal";

export default function App() {
  return (
    <div className="container">

      <Modal >
        <p>success</p>
        <ul className="cd-buttons">
          <li><a href="#0">Yes</a></li>
          <li><a href="#0">No</a></li>
        </ul>
      </Modal>

    </div>

  )
}

