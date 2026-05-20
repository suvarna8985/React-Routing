import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Card.css";

export default function Contact() {
  const [doctors, setDoctors] = useState([]);

  //“We need one variable to store input text.”
  //  search → stores typed value
  // setSearch → updates value
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    axios.get("https://doc-back.onrender.com/doctors").then((res) => {
      console.log(res.data);
      setDoctors(res.data);
    });
  }

  // STEP 2 : added filter()
  // this creates new filtered array
  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <p>about</p>

      <div className="searchBox">
        <input
          type="text"
          placeholder="Search doctor"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>


<div className="card">
      {filteredDoctors.length === 0 ? ( //if no matching doctors, then filterdoctors arrey will be 0 right, so,if there is no matching "not found" ,if yes return map
        <h2>No Doctors Found</h2>
      ) : (
        filteredDoctors.map((i) => (
          <div key={i.id}>
            <div className="inside">
              <p>
                <b>name:</b>
                {i.name}
              </p>
              <p>
                <b>salary:</b>
                {i.salary}
              </p>
              <p>
                <b>gender:</b>
                {i.gender}
              </p>
            </div>
          </div>
        ))
      )}
      </div>
    </div>
  );
}



