import React from 'react'
import './Component.css'
function Button2({text, variant='dark'}) {
  return (
    <>
    <button className={`hover2 ${variant}`}>{text}</button>
    </>
  )
}

export default Button2