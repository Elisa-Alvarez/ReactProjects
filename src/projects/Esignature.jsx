import React, {useState} from 'react'
import Title from './components/Title'

export default function Esignature() {
    const [name, setName]=useState("Your Singature")
    const [date, setDate]=useState("DoB")
    const inputStyle ={
        border:"none",
        borderBottom:"1px solid black",
        margin:"1rem",
        outline: "none",
        padding: ".35rem"
    };
    const handleNameChange = (e) =>{
     setName(e.target.value)
    }
    const handleDateChange = (e) =>{
        setDate(e.target.value)
    }
  return (
    <div className='container text-center'>
      <Title classes={"title"} text={!name ?"Please Add Name" : name}/>
      <Title classes={"main-title mb-4"} text={!date ?"DoB" : date}/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <footer className='d-flex' style={{justifyContent: "space-around", position:"relative", top:"40vh" }}>
        <input type='date'value={date} style={inputStyle} onChange={handleDateChange}/>
        <input type='text'value={name} style={inputStyle} onChange={handleNameChange}/>
      </footer>
    </div>
  )
}
