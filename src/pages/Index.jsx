import React, { useEffect, useState } from 'react'
import './Index.css'
import Button2 from '../component/Button2'
import customerReviews from "../data/customerReviews";
import Graph from '../component/Graph'
import TextSlider from '../component/Slider'
import Speciality from '../component/speciality'
import Services from '../component/Services'
import Button from '../component/Button'
import project from '../images/project.jpg'
import project2 from '../images/project2.jpg'
import right from '../images/right.png'
import left from '../images/left.png'
import Experience from '../component/Experienced'
import Pricing from '../component/Pricing'
import Blog from '../component/Blog'
import PreFooter from '../component/PreFooter'
import Footer from '../component/Footer'
import CopyRight from '../component/CopyRight'


function Index() {
  const [reviewIndex, setReviewIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setReviewIndex((prevIndex) => (prevIndex + 1) % customerReviews.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const visibleReviews = []
  for (let i = 0; i < 3; i++) {
    const index = (reviewIndex + i) % customerReviews.length
    visibleReviews.push(customerReviews[index])
  }
  const [currentImage, setCurrentImage] = useState(0);

  const projects = [
    project,
    project2,
  ];

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };
  return (
    <>
      {/* Hero Section */}
      <section className="HeroSection">
        <div className="container">
          <div className="row">
            <div className="d-flex align-items-center py-3 col-md-6 col-12">
              <div className="d-flex flex-column gap-3 align-items-start">
                <div className="d-flex align-items-lg-center">
                  <h1>
                    Elevate your Brand with expert<span className='span'> SEO & Digital Marketing</span>
                  </h1>
                </div>
                <div className="">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. In nulla nunc arcu velit
                    massa mauris molestie hac. Hac arcu amet nullam pellentesque. Urna
                    eu felis sodales sit non. Lorem ipsum dolor sit amet In nulla nunc
                    arcu velit massa mauris molestie hac. Hac arcu amet nullam
                    pellentesque.
                  </p>
                </div>
                <div className="d-flex align-items-start gap-3">
                  <Button2 text="Start Now" variant='dark' />
                  <Button2 text="Contact Us" variant="light" />
                </div>
                <div className="review-strip">
                  <div className="avatar-stack" aria-label="Customer reviews">
                    {visibleReviews.map((review, index) => (
                      <div
                        key={review.id}
                        className={`avatar-item avatar-${index + 1}`}
                        title={review.name}
                      >
                        <img src={review.image} alt={review.name} />
                      </div>
                    ))}

                    <div className="plus-badge">+</div>
                  </div>

                  <div className="review-copy">
                    <h3>Positive Review</h3>
                    <div className="stars" aria-label="5 out of 5 stars">
                      ★★★★★
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="col-md-6 col-12">
              <div className="d-flex justify-content-center align-items-center">




                <Graph />


              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Text Slider Section */}
      <TextSlider
        type="text"
        items={[
          "Marketing Solutions",
          "Search Engine Optimization",
          "Research & Analysis",
          "SEO Strategy Development",
        ]} />

      {/*  Speciality Section*/}
      <Speciality />
      {/*Service  */}
      <Services />
      {/* Projects Section */}
      <section className='Projects'>
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-12">
              <div className="d-flex flex-column gap-5">
                <div className="service-us-tab">

                  <div className="service-circle"></div>

                  <div className="service-text">
                    <span className="service-word">Our</span>
                    <span className="service-word"> Project</span>
                  </div>

                  <span className="service-line"></span>

                </div>
                <div className=''><h2>Some of the Projects We <span className='span'>Have Completed</span></h2></div>
                <div><p>We turn ideas into impactful digital experiences through thoughtful design, modern technology, and creative solutions. Explore some of the projects we have successfully completed for businesses across different industries.</p></div>
              </div>
            </div>
            <div className="col-md-4 col-12">

              <figure className="w-100 h-100 position-relative mb-0">

                <img
                  src={projects[currentImage]}
                  alt="Our Projects"
                  className="w-100 project-slider-image h-100"
                />

                <div className="d-flex gap-1 position-absolute project-arrows">

                  <div
                    className="arrow d-flex align-items-center justify-content-center"
                    onClick={previousImage}
                  >
                    <figure className="mb-0">
                      <img
                        src={left}
                        alt="Previous"
                        className="w-100 project-slider-image h-100"
                      />
                    </figure>
                  </div>


                  <div
                    className="arrow d-flex align-items-center justify-content-center"
                    onClick={nextImage}
                  >
                    <figure className="mb-0">
                      <img
                        src={right}
                        alt="Next"
                      />
                    </figure>
                  </div>

                </div>

              </figure>

            </div>
            <div className="col-md-3 col-12">
              <div className="d-flex flex-column gap-5 mt-5">
                <div className="d-flex flex-column gap-1">
                  <div><h5>Quality Assurance</h5></div>
                  <div><p>Lorem ipsum dolor sit amet consectetur. In nulla nunc arcu amet</p></div>
                </div>
                <div className="d-flex flex-column gap-1">
                  <div><h5>Real Experiences</h5></div>
                  <div><p>Lorem ipsum dolor sit amet consectetur. In nulla nunc arcu amet</p></div>
                </div>
                <Button text="View Details" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Experience Section */}
      <Experience />
      {/* Pricing Section */}
      <Pricing />
      {/* Blog Section */}
      <Blog />
      {/* PreFooter Section */}
      <PreFooter />
      {/* Footer Section */}
      <Footer />
      {/* CopyRight Section */}
      <CopyRight />
    </>
  )
}

export default Index
