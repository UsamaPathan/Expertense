import React from 'react'
import HeroBanner from '../component/HeroBanner'
import Pricing from '../component/Pricing'
import PreFooter from '../component/PreFooter'
import Footer from '../component/Footer'
import CopyRight from '../component/CopyRight'

function PricingPage() {
  return (
    <>
    <HeroBanner text="Pricing Plan"/>
    <Pricing />
    <PreFooter />
    <Footer />
    <CopyRight />
    
    </>
  )
}

export default PricingPage