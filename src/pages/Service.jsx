import React from 'react'
import HeroBanner from '../component/HeroBanner'
import Services from '../component/Services'
import Pricing from '../component/Pricing'
import Experience from '../component/Experienced'
import PreFooter from '../component/PreFooter'
import Footer from '../component/Footer'
import CopyRight from '../component/CopyRight'
import Reviews from "../component/Reviews";
function Servics() {
  return (
    <>
    <HeroBanner text= 'Our Services'/>
    <Services />
    <Reviews />
    <Pricing />
    <Experience />
    <PreFooter />
    <Footer />
    <CopyRight />
    </>
  )
}

export default Servics