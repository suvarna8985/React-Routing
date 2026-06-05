import React from 'react'

export default function ProtectRoute(props) {
    if (props.isLogin){
        return props.children
    }
  return (
    <div>
      <h1></h1>
    </div>
  )
}
