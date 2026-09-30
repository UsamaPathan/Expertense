import React from 'react'
import ReadMore from './ReadMore'
import experience from '../images/experience.jpg'
import logoipsum from '../images/logoipsum.png'
import logoipsum2 from '../images/logoipsum2.png'
import logoipsum3 from '../images/logoipsum3.png'


function Experience() {
    return (
        <>
            <section className='Experience'>
                <div className="container">
                    <div className="d-flex gap-3 align-items-center justify-content-between flex-column flex-md-row mb-3">

                        <div className="service-us-tab">

                            <div className="service-circle"></div>

                            <div className="service-text">
                                <span className="service-word">Why Choose</span>
                                <span className="service-word"> Us</span>
                            </div>

                            <span className="service-line"></span>

                        </div>


                        <div className="d-flex align-items-lg-start">

                            <h2>
                                Experienced SEO{" "}
                                <span className="span">
                                    Company For You
                                </span>{" "}
                            </h2>

                        </div>


                        <ReadMore />

                    </div>
                    <div className="row">
                        
                            <div className="col-md-6 col-12">
                                <figure className='w-100 h-100'>
                                    <img src={experience} alt="Why Choose us" className='w-100' />
                                </figure>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="d-flex flex-column gap-5">
                                    <div className="service-red-box mb-0">
                                    <div className="d-flex gap-3 flex-column">
                                        <div><p>
                                            Lorem ipsum dolor sit amet consectetur. In nulla nunc arcu velit massa mauris molestie hac. Hac arcu amet nullam pellentesque. Urna eu  felis sodales sit non.Lore ipsum dolor sit amet  In nulla nunc arcu velit massa mauris molestie hac. Hac arcu amet nullam pellentesque.                                </p>
                                        </div>
                                        <div className="d-flex flex-column flex-md-row gap-4">
                                            <div className="d-flex flex-column gap-3">
                                                <div><h4>Analyze The Problem</h4></div>
                                                <div><p>Lorem ipsum dolor sit amet consectetur. In nulla nunc arcu velit massa mauris molestie hac</p></div>
                                               <div><h4>Project Execution</h4></div>
                                               <div><p>Lorem ipsum dolor sit amet consectetur. In nulla nunc arcu velit massa mauris molestie hac</p></div>
                                            </div>
                                             <div className="d-flex flex-column gap-3">
                                                <div><h4>Specify The Target</h4></div>
                                                <div><p>Lorem ipsum dolor sit amet consectetur. In nulla nunc arcu velit massa mauris molestie hac</p></div>
                                               <div><h4>Specify The Target</h4></div>
                                               <div><p>Lorem ipsum dolor sit amet consectetur. In nulla nunc arcu velit massa mauris molestie hac</p></div>
                                            </div>
                                        </div>
                                       </div>
                                    </div>
                                   <div className="d-flex gap-3 align-items-center">
                                    <figure className='w-100 h-100'><img src={logoipsum} alt="Silde1" className='w-75 h-100'/></figure>
                                    <figure className='w-100 h-100'><img src={logoipsum2} alt="Sile2" className='w-75 h-100'/></figure>
                                    <figure className='w-100 h-100'><img src={logoipsum3} alt="Slide3" className='w-75 h-100'/></figure>
                                   </div>
                            </div>
                            </div>
                        
                    </div>
                </div>
            </section>

        </>
    )
}

export default Experience