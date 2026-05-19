import React from 'react'
import axios from "axios";

export default function DoctorDetails() {
    const {id}=useParams()
    const [result,setResult]=useState('${id}')
    function getDoctor(){
        axios.get(`https://doc-back.onrender.com/doctors/${id}`)
        .then((result)=>{
            console.log(result);

                  })
    }







  return (
    <div>
      <p>this is doctor page</p>
      {id}
      <p>{}</p>
    </div>
  )
}
