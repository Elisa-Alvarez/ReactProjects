import React, { useState } from 'react'
import Title from './Title'
import DogPic from '../../img/dogpic.jpg'
import {GiDogBowl} from 'react-icons/gi'
import {LuMenu} from 'react-icons/lu'
import {BsBalloonHeartFill, BsBalloonHeart} from 'react-icons/bs'
import {AiOutlineComment} from 'react-icons/ai'
export default function Card() {
  const [like, setLikes] =useState(false)
  const [count, setCount] = useState(0)
  
  const handleLikes = () =>{
    if(!like){
      setCount(count+1)
      setLikes(true)
    }else{
      setCount(count -1)
      setLikes(false)
    }
  }
  return (
    <div className="card margin-auto" style={{width: "25%", cursor:"pointer"}}>
        <div className='card-header d-flex' style={{justifyItems:"center", justifyContent:"space-between"}}>
                <GiDogBowl/>
                <small>DoggyDog</small>
                <LuMenu/>
        </div>
        <img src={DogPic} alt='profile photo of doggy dog' style={{ width: '98%', height:'fit-content'}} />
        <div className="card-footer d-flex" style={{justifyContent:"space-between", height:"1.5rem", padding: '0.9rem'}}>
            <AiOutlineComment/>
            <Title text={"Likes "+ count} classes={"subtitle"}/>
            { like ?<BsBalloonHeartFill className='text-danger' onClick={handleLikes}/>
            :<BsBalloonHeart onClick={handleLikes}/>}
        </div>
    </div>
  )
}
