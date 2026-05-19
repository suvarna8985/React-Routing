import React from 'react'
import axios from "axios";

export default function AddDoctor() {
    const[name,setName]=useState("")
    const [salary,setSalary]=useState("")
    const [age,setAge]=useState("")
    const [gender,setGender]=useState("")
    const [specialization,setSpecialization]=useState("")
    function handleSubmit(e){
        e.preventDefault()
        const newDoctor={
            name,
            salary,
            age,
            gender,
            specialization
        }
        axios.post("https://doc-back.onrender.com/doctors",newDoctor)
        .then(()=>{
            alert("posteed successfully ")
            setName("")
            setAge("")
            setSalary("")
            setSpecialization("")
        })
    }




  return (
    <div>
      <form action="" onSubmit={handleSubmit()}>
        <input type="text" placeholder='enter doctor name' value={"name"}
        onChange={(e)=>setName(e.target.value)}/>
        <br></br>
        <input type="text" placeholder='enter doctor salary' value={"salary"}
        onChange={(e)=>setSalary(e.target.value)}/>
         <br></br>
         <input type="text" placeholder='enter doctor age' value={"age"}
        onChange={(e)=>setAge(e.target.value)}/>
         <br></br>
        
        
        <select name="" id=""   value={"gender"}
        onChange={(e)=>setGender(e.target.value)}>
            <option value="">Enter Gender</option>
            <option value="male">Male</option>
            <option value="female">FeMale</option>
        </select>
         <br></br>
        <input type="text" placeholder='enterspecialization' value={"specialization"}
         onChange={(e)=>setSpecialization(e.target.value)}/>
         <br></br>
        <button>Add Doctor</button>
      </form>
    </div>
  )
}
