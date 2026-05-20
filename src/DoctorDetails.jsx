import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function DoctorDetails() {

  const {id}=useParams()

  function getDoctor(){
    axios.get(`https://doc-back.onrender.com/doctors/${id}`)
  }


  return (
    <div>
     <p> this is doctor details page</p>
    {id}
    </div>
  )
}
