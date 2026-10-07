import React from 'react'
import './Component.css'
import '../pages/Index.css'

function HeroBanner({text}) {
  return (
    <>
    <section className="HeroBanner">
        <div className="d-flex align-items-center justify-content-center text-center">
      <h1>{text}</h1>
        </div>
    </section>
    
    </>
  )
}

export default HeroBanner