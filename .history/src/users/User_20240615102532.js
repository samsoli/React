import React from 'react'

export default function User(props) {
    return (
        <div>
            <h1>name : {props.name}</h1>
            <h1>age : {props.age}</h1>
        </div>
    )
}
