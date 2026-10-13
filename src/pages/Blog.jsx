import React from 'react'
import HeroBanner from '../component/HeroBanner'
import Blog from '../component/Blog.jsx'
import PreFooter from '../component/PreFooter.jsx'
import Footer from '../component/Footer.jsx'
import CopyRight from '../component/CopyRight.jsx'
function Blogs() {
  return (
    <>
    <HeroBanner text="Our Blogs"/>
    <Blog />
    <PreFooter />
      <Footer />
      <CopyRight />
    </>
  )
}

export default Blogs