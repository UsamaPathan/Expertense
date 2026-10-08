import React from 'react'
import Speciality from '../component/speciality'
import Experience from '../component/Experienced'
import PreFooter from '../component/PreFooter'
import Footer from '../component/Footer'
import CopyRight from '../component/CopyRight'
import HeroBanner from '../component/HeroBanner'
import MarketingApproach from "../component/MarketingApproach";
import FAQ from '../component/FAQ'
import '../component/Component.css'
import faq from '../images/faq.jpg'

function About() {
  return (
    <>
    <HeroBanner text="About Us"/>
    <Speciality />
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
    ]}
    />
    <Experience />

    <FAQ image={faq}/>
    <PreFooter/>
    <Footer/>
    <CopyRight/>
    </>
  )
}

export default About