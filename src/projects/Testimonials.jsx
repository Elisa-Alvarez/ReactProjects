import React,{useEffect, useState} from 'react'
import Title from './components/Title'
import Button from './components/Button'
import { BsFillFileEarmarkPostFill } from 'react-icons/bs'
import { FaUserAlt} from 'react-icons/fa'
import { BiCommentDetail} from 'react-icons/bi'

function Testimonials() {
 const [testimonials, setTestimonials] =useState()
 const [items, setItems] =useState(null)
 useEffect(()=>{
  if(testimonials){
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }
 },[testimonials])
  return (
    <div className='container'>
      <Title text={"Testimonials"}/>
      <Button 
      text={"Posts"} 
      btnClass={'btn-small'}
      icon={<BsFillFileEarmarkPostFill className='mr-1'  />}
      event={()=>setTestimonials("Posts")}
      />
      <Button 
      text={"User"} 
      btnClass={'btn-small'}
      icon={<FaUserAlt className='mr-1'/>}
      event={()=>setTestimonials("Users")}
      />
            <Button 
      text={"Comment"} 
      btnClass={'btn-small'}
      icon={<BiCommentDetail className='mr-1'/>}
      event={()=>setTestimonials("Comments")}
      />
      <Title classes={"subtitle text-primary"} text={!testimonials ?"Select From Above": testimonials}/>
     {!items ? null : items.map((item) =>{
       return( 
       <div className="card card-primary" key={item.id} >
          {item.name && <h2 className='card-header'>{item.name}</h2>}
          <div className="card-body">
            <h4 style={{fontStyle:"normal", fontWeight:800, textDecoration:"underline", marginBottom:"1rem"}}>{item.title}</h4>
            <h4>{item.body}</h4>
          </div>
       </div>)
      })} 
    </div>
  )
}

export default Testimonials
