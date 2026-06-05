import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Login from './Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar'
import DoctorDetails from './DoctorDetails'
import AddDoctor from './AddDoctor'
import EditDoctor from './EditDoctor'
import ProtectRoute from './ProtectRoute'


export default function App() {
  // const isLogin=true
  const isLogin=localStorage.getItem("isLogin")
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctor/:id" element={<DoctorDetails />} />
         {/* <Route path="/AddDoctor" element={<AddDoctor />} /> */}
         {/* <Route Path="/addDoctor" element={isLogin?Please Login First<AddDoctor />} />> */}

        <Route path="/addDoctor" element={
          <ProtectRoute isLogin={isLogin}>
            <AddDoctor></AddDoctor>
          </ProtectRoute>
        } />
         <Route path="/edit/:id" element={<EditDoctor />}></Route>

        
      </Routes>
      </BrowserRouter>
    </div>
  )
}
