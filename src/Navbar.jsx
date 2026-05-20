import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
     <Link to="/">Home</Link>
     <Link to="/About">About</Link>
     <Link to="/Contact">Contact</Link>
     <Link to="/Login">Login</Link>
     <Link to="/AddDoctor">Add Doctor</Link>
    </div>
  )
}
