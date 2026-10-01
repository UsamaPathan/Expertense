import React from 'react'
import speciality from '../images/speciality.jpg'
import seo from '../images/seo.jpg'
import Button2 from './Button2'
import './Component.css'
import '../pages/Index.css'
function Speciality() {
  return (
    <>
    
      {/*speciality Section  */}
      <section className="SpecialitySection">
         {/* About Us Vertical Tab */}
 
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
              <Button2 text="Read More" />
            </div>
            <div className="col-md-8 col-12 ">
              <div className="position-relative d-flex flex-column gap-3">
                 <div className="about-us-tab">
  <span className="about-line"></span>

  <div className="about-text">
    <span className="about-word">About</span>
    <span className="us-word"> Us</span>
  </div>

  <div className="about-circle"></div>
</div>
                <div className='align-items-lg-start'><h2>Challenges in <span className='span'>Digital Technology</span> are Our Specialty</h2></div>
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

export default Speciality