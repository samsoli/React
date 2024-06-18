import React from "react";
import './Modal.css'

export default class Modal extends React.Component {

    render() {
        return (
            <div>
                <div className="cd-propup is-visible" role="alert">
                    <div className="cd-popup-container">
                        
                    </div>
                    <a href="#0" className="cd-propup-close img-replace">Close</a>
                </div>
            </div>
        )
    }
}

