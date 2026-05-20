import React from 'react'
import axios from 'axios'
import {useState,useEffect } from 'react'
import './Card1.css'
import DoctorCard from './DoctorCard'

export default function About() {
  const[doctors,setDoctors]=useState([])
  const[search,setSearch]=useState("")


  useEffect(()=>{
    console.log("hello suvarnaaaaaa");
    loadData()
  },[])
  //dependency array

const filterDoctors=doctors.filter((doctor)=>(
  doctor.name.toLowerCase().includes(search.toLowerCase())
))


//getdata
function loadData(){
       axios.get("https://doc-back.onrender.com/doctors")
   .then((result)=>{
    console.log(result)
    console.log(result.data);
    setDoctors(result.data)
  

})


}
//console.log(doctors)

function handleSearch(e){
  console.log(e.target.value);
  setSearch(e.target.value)
}

//delete data
function deleteDoctor(id){
  axios.delete(`https://doc-back.onrender.com/doctors/${id}`)
  .then(()=>{
    alert("deleted successfully")
    loadData()
  })
}

  return (
    <div>
          <div className='search'>
            <input type="text"
            placeholder='search doctor'
            value={search}
            onChange={handleSearch} />
          </div>
          <div className='card'>
        {
          filterDoctors.length===0?
          (<h1>Not Found</h1>):
          (filterDoctors.map((i)=>(
            <div key={i.id}>
              <DoctorCard
              id={i.id}
              name={i.name}
              age={i.age}
              gender={i.gender}
              specialization={i.specialization}
              deleteDoctor={deleteDoctor}
              />
              </div>

          )))
        }

          </div>
    </div>
  )
}
