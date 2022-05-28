import React from "react";
import { useState } from "react";
import {data} from "./Birthdaydata";
function App(){
  const[people,setPeople]=useState(data)
  
  const removePerson=(id)=>{
    let newPerson=people.filter((person)=>person.id!==id)
    setPeople(newPerson)
  }
return (
  <>
  <h3 style={{
    backgroundColor:"yellow",
    color:"purple",
    textAlign:"center",
    fontSize:"35px",
    marginTop:"50px",
    borderRadius:"50%",
  }}>
    {people.length} BIRTHDAY'S TODAY</h3>
    {people.map((person)=>{
      const{id,name,image}=person
      return(
        <>
        <div className="container" key={id}>
          <div className="box">
            <img src={image} alt={name} />
            <h3>{id}</h3>
            <h3>{name}</h3>
            
          </div>
          <div className="button">
            <button className="btn" onClick={()=>removePerson(id)}>DISMISS</button>
          </div>
        </div>
        </>
      )
    })}
  </>
)
  }
export default App
