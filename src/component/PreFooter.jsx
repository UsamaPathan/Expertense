import React from 'react'
import './Component.css'
import logo from '../images/logo.png'
function PreFooter() {
  return (
    <>
    <section className="Prefooter">
    <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="d-flex flex-column gap-2 align-items-start align-items-md-start">
                <figure>
                    <img src={logo} alt="logo" />
                </figure>
                <p>Lorem ipsum dolor sit amet consectetur. In nulla nunc arcu velit massa mauris molestie hac. Hac</p>
            </div>
            <div className="d-flex align-items-start align-items-md-center">
                <h1>Let's Talk About <span className="span">Your Project</span></h1>
                <div className="d-flex  align-items-center justify-content-center circle "><div className="arrow">→</div></div>
            </div>
        </div>
        </div>      
    </section>
    </>
  )
}

export default PreFooter