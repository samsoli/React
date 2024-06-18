import React from 'react'
import './user.css'
export default function User({ props }) {
    return (
        <div>
            <li>{props.name}</li>
        </div>
    )
}
