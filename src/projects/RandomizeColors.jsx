import React from 'react'
import Title from './components/Title'

export default function RandomizeColors() {
    const handleClick = e =>{
        let body = document.querySelector('.App')
        body.style.background = getRandomColor()
        e.target.style.backgroundColor = getRandomColor()
    }
    function getRandomColor(){
        let hexLetters = "0123456789abcdef"
        let color ="#"
        for(let i=0; i<6; i++){
            color+= hexLetters[Math.floor(Math.random()*16)]
        }
        return color
    }
  return (
   <div className='container'>
     <Title className="text-glow" text={"Randomize Colors"} classes={"title glow"}/>
     <button className='btn' onClick={handleClick}>Click Me</button>
     <button className='btn btn-primary'onClick={handleClick}>Click Me</button>
     <button className='btn btn-success'onClick={handleClick}>Click Me</button>
     <button className='btn btn-warning'onClick={handleClick}>Click Me</button>
   </div>
  )
}
