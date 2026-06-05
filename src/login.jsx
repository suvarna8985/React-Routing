import React from 'react'

export default function Login() {
  function handleLogin(){
    localStorage.setItem("isLOgin",true)
    alert('Login successful')
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
