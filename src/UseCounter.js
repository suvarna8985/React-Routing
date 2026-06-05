import React from 'react'
import { useState } from 'react'

export default function UseCounter() {
    const[count,setCount]=useState(5)
    
    function increment(){
        setCount(count+1)
    }

    function decrement(){
        setCount(count-1)
    }
  return (
   count,
   increment,
   decrement
  )
}
