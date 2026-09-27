import React, { useEffect, useState } from 'react'
import './Index.css'
import Button2 from '../component/Button2'
import Button3 from '../component/Button3'
import Review1 from '../images/review_1.png'
import Review2 from '../images/review_2.png'
import Review3 from '../images/review_3.png'
import Graph from '../component/Graph'
import TextSlider from '../component/Slider'
import Speciality from '../component/speciality'

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

      {/*  Speciality Section*/}
      <Speciality/>
    </>
  )
}

export default Index
