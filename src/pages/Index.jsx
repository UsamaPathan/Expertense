import React, { useEffect, useState } from 'react'
import './Index.css'
import Button2 from '../component/Button2'
import Button3 from '../component/Button3'
import Review1 from '../images/review_1.png'
import Review2 from '../images/review_2.png'
import Review3 from '../images/review_3.png'
import Graph from '../component/Graph'
import TextSlider from '../component/Slider'
import seo from '../images/seo.jpg'
import speciality from '../images/speciality.jpg'

const customerReviews = [
  {
    id: 1,
    name: 'Sarah',
    image: Review1,
  },
  {
    id: 2,
    name: 'Aisha',
    image: Review2,
  },
  {
    id: 3,
    name: 'Daniel',
    image: Review3,
  },
  {
    id: 4,
    name: 'Emma',
    image: Review2,
  },
]

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
                    Elevate your Brand with expert<span> SEO & Digital Marketing</span>
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
                  <Button2 />
                  <Button3 />
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
      <TextSlider />

      {/* Speciality Section */}
      <section className="SpecialitySection">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="d-flex flex-column gap-3 align-items-start">
                <figure className='pb-3'>
                  <img src={seo} alt="Speciality 1" />
                </figure>
                <div className="d-flex flex-column gap-3">
                  <ul class="service-list">
                    <li className='d-flex gap-3 align-content-center'>
                      <span class="number">1</span>
                      <h5>Negative Keyword Pruning</h5>
                    </li>

                    <li className='d-flex gap-3 align-content-center'>
                      <span class="number">2</span>
                      <h5>Ad Copy Optimization</h5>
                    </li>

                    <li className='d-flex gap-3 align-content-center'>
                      <span class="number">3</span>
                      <h5>Keyword And Competitor Research</h5>
                    </li>

                    <li className='d-flex gap-3 align-content-center'>
                      <span class="number">4</span>
                      <h5>SKAGS (Single Keyword Ad Groups)</h5>
                    </li>
                  </ul>
                </div>
              </div>
              <Button2/>
            </div>
            <div className="col-md-8 col-12 ">
              <div className="d-flex flex-column gap-3">
                <div className='align-items-lg-start'><h2>Challenges in <span>Digital Technology</span> are Our Specialty</h2></div>
                <div className="align-items-lg-start"><p>Lorem ipsum dolor sit amet consectetur. In nulla nunc arcu velit massa mauris molestie hac. Hac arcu amet nullam pellentesque. Urna eu  felis sodales sit non.Lorem ipsum dolor sit amet  In nulla nunc arcu velit massa mauris molestie hac. Hac arcu amet nullam pellentesque.</p></div>
                <div className="position-relative">
                  <figure className='align-items-lg-start'><img src={speciality} alt="" /></figure>
                 <div className="position-absolute bg-white py-3 px-5 border-1 ">
                  <div className="d-flex flex-column gap-2">
                    <div><h4>achievement</h4></div>
                    <div className="d-flex gap-2">
                      <div className="d-flex flex-column gap-1">
                        <h5>Project</h5>
                        <h6>68k+</h6>
                      </div>
                      <div className="d-flex flex-column gap-1">
                        <h5>Brands</h5>
                        <h6>80</h6>
                      </div>
                      <div className="d-flex flex-column gap-1">
                        <h5>Awards</h5>
                        <h6>16+</h6>
                      </div>
                    </div>
                  </div>

                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Index
