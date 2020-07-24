import React from 'react'

export default function Pizza({ details }) {
    if (!details) {
        return <h2>Warming up those tasty details...</h2>
    }

    return (
        <div className='pizza container'>
            <h3>{details.name}</h3>
            <p>Size: {details.size}</p>
            <p>Sauce: {details.sauce}</p>
            <p>Toppings: {details.toppings}</p>
            <p>Instructions: {details.instructions}</p>
        </div>
    )
}