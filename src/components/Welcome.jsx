import { AlignEndHorizontal, Heart } from 'lucide-react'
import React from 'react'
import Counter from './Counter'

export default function Welcome({ name, age, message }) {
    return (
        <div>
            <h1>{message} {name}</h1>
            <h2>My Age is {age} </h2> 
            <p>Thanks For Learn React </p> <AlignEndHorizontal /> 
            <Counter />
        </div>
    )
}
