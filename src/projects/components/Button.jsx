import React from 'react'

export default function Button({text, btnClass,icon, event}) {
  return (
    <button className={`btn ${btnClass}`} onClick={event}>{icon}{!text ?"click":text}</button>
  )
}
