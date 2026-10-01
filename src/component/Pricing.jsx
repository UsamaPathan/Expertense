import React from 'react'
import Card from './Card'

function Pricing() {
  return (
    <>
    <section className="Pricing">
      <div className="container">
        <div className="d-flex align-items-start align-items-md-center text-start text-md-center justify-content-start justify-content-md-center mb-2">
        <h2 >Select a Plan According to <span className="span">Your Requirements</span></h2>
        </div>
        <div className="row g-3">
            <div className="col-md-4 col-12">    
    <Card 
        h4="Basic" 
        h2="$9.99" 
        disc="Social Media Advertising" 
        disc2="Keyword Research" 
        disc3="Monthly SEO Report"
    /> 
</div>

<div className="col-md-4 col-12">    
    <Card 
        h4="Advance Plan" 
        h2="$19.99" 
        disc="Advanced SEO Optimization" 
        disc2="Content Strategy & Optimization" 
        disc3="Competitor Analysis"
    /> 
</div>

<div className="col-md-4 col-12">    
    <Card 
        h4="Premium Plan" 
        h2="$39.99" 
        disc="Complete SEO Management" 
        disc2="Advanced Competitor Research" 
        disc3="Detailed Analytics & Reporting"
    /> 
</div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Pricing