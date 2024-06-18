import React from 'react'
import './user.css'
export default function User({ props }) {
    return (
        <div>
            <ul>
            <li>{props.name}</li>
            </ul>
            
        </div>
    )
}
