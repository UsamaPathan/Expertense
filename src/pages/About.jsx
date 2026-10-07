import React from 'react'
import TextSlider from '../component/Slider'
import Speciality from '../component/speciality'
import Button from '../component/Button'
import project from '../images/project.jpg'
import project2 from '../images/project2.jpg'
import Experience from '../component/Experienced'
import PreFooter from '../component/PreFooter'
import Footer from '../component/Footer'
import CopyRight from '../component/CopyRight'
import HeroBanner from '../component/HeroBanner'


function About() {
  return (
    <>
    <HeroBanner text="About Us"/>
    <Speciality />
    <Experience />
    <PreFooter/>
    <Footer/>
    <CopyRight/>
    </>
  )
}

export default About