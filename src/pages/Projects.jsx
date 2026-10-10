import React from 'react'
import HeroBanner from '../component/HeroBanner'
import PreFooter from '../component/PreFooter'
import Footer from '../component/Footer'
import CopyRight from '../component/CopyRight'
import MarketingApproach from '../component/MarketingApproach'

function Projects() {
  return (
    <>
    <HeroBanner text="Our projects"/>
    
    <MarketingApproach 
      title="A Step By Step Guide To Our"
    highlight="Marketing Approach"
    description="Lorem ipsum dolor sit amet consectetur. In nulla nunc arcu velit massa mauris molestie hac. hac arcu amet ullam pellentesque. urna eu felis sodales sit non. Lorem ipsum dolor sit amet in nulla nunc arcu velit massa mauris molestie hac."
    processTitle="Working Process"
    cards={[
        {
            title: "Initial Consultation",
            description:
                "Lorem ipsum dolor sit amet in nulla nunc arcu velit massa mauris molestie hac. hac arcu amet ullam pellentesque arcu amet nullam pellentesque."
        },

        {
            title: "Research And Analysis",
            description:
                "Lorem ipsum dolor sit amet in nulla nunc arcu velit massa mauris molestie hac. hac arcu amet ullam pellentesque arcu amet nullam pellentesque."
        },

        {
            title: "Strategy Development",
            description:
                "Lorem ipsum dolor sit amet in nulla nunc arcu velit massa mauris molestie hac. hac arcu amet ullam pellentesque arcu amet nullam pellentesque."
        }
    ]}/>
    <PreFooter />
    <Footer />
    <CopyRight />
    </>
  )
}

export default Projects