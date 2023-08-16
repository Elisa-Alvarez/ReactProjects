import React, { useState } from 'react'
import Title from './Title'
import DogPic from '../../img/dogpic.jpg'
import {GiDogBowl} from 'react-icons/gi'
import {LuMenu} from 'react-icons/lu'
import {BsBalloonHeartFill, BsBalloonHeart} from 'react-icons/bs'
import {AiOutlineComment} from 'react-icons/ai'
export default function Card() {
  const [like, setLikes] =useState(false)
  
  const handleLikes = (e) =>{
    !like ?setLikes(true): setLikes(false)
  }
  return (
    <div className="card margin-auto" style={{width: "40vw", cursor:"pointer"}}>
        <div className='card-header d-flex' style={{justifyItems:"center", justifyContent:"space-between"}}>
                <GiDogBowl/>
                <small>DoggyDog</small>
                <LuMenu/>
        </div>
        <img src={DogPic} alt='profile photo of doggy dog' style={{ width: '98%', height:'60vh'}} />
        <div className="card-footer d-flex" style={{justifyContent:"space-between", height:"15%"}}>
            <AiOutlineComment/>
            <Title text={"Likes"} classes={"subtitle"}/>
            { like ?<BsBalloonHeartFill className='text-danger' onClick={handleLikes}/>
            :<BsBalloonHeart onClick={handleLikes}/>}
        </div>
    </div>
  )
}
