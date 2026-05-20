import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {useEffect} from 'react'

export default function EditDoctor() {
    const[name,setName]=useState("")
    const [salary,setSalary]=useState("")
    const [age,setAge]=useState("")
    const [gender,setGender]=useState("")
    const [specialization,setSpecialization]=useState("")

    useEffect(()=>{
        loadDoctors()
    },[])

    const {id}=useParams()
    
    function loadDoctors(){
        axios.get(`https://doc-back.onrender.com/doctors/${id}`)
        .then((result)=>{
            console.log(result.data);
            setName(result.data.name)
            setSalary(result.data.salary)
            setGender(result.data.gender)
            setAge(result.data.age)
            setSpecialization(result.data.specialization)
        })
    }

    function updateDoctor(e){
        e.preventDefault()
        axios.put(`https://doc-back.onrender.com/doctors/${id}`,{
            name,salary,gender,age,specialization

        })
        .then(()=>{
            alert("updated Successfully")
        })

    }



  return (
    <div>
        
      <form action="" onSubmit={updateDoctor}>
        <input type="text" placeholder='enter doctor name' value={name}
        onChange={(e)=>setName(e.target.value)}/>
        <br></br>
        <input type="text" placeholder='enter doctor salary' value={salary}
        onChange={(e)=>setSalary(e.target.value)}/>
         <br></br>
         <input type="text" placeholder='enter doctor age' value={age}
        onChange={(e)=>setAge(e.target.value)}/>
         <br></br>
        
        
        <select name="" id=""   value={gender}
        onChange={(e)=>setGender(e.target.value)}>
            <option value="">Enter Gender</option>
            <option value="male">Male</option>
            <option value="female">FeMale</option>
        </select>
         <br></br>
        <input type="text" placeholder='enterspecialization' value={specialization}
         onChange={(e)=>setSpecialization(e.target.value)}/>
         <br></br>
        <button>Update Doctor</button>
      </form>
    
    </div>
  )
}
