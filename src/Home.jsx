import React from 'react'
import UseCounter from './UseCounter'
export default function Home(){
    const{
        count,
        increment,
        decrement
    }



    return (
        <div> 
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}