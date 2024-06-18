import React  from "react";
import './Modal.css'

export default function Modal(){
    return(
        <div>
        <div className="cd-propup is-visible" role="alert">
            <p>Are you sure?</p>
            <ul className="cd-buttons">
                <li><a href="#0">Yes</a></li>
                <li><a href="#0">No</a></li>
            </ul>
            <a href="#0" className="cd-propup-close img-replace">Close</a>
        </div>
        </div>
    )
}