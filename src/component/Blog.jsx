import React from 'react'
import './Component.css'
import blog from '../images/blog.jpg'
import blog2 from '../images/blog2.jpg'
import blog3 from '../images/blog3.jpg'
function Blog() {

    return (

        <>
            <section className='Blog'>
                <div className="container">
                    <div className="d-flex flex-column gap-4">
                        <div className="d-flex align-items-md-center justify-content-md-center align-items-start justify-content-start">
                            <h2>Read Our Latest <span className='span'>blog & Insights</span></h2>
                        </div>

                        <div className="row g-5">
                            <div className="col-md-6 col-12">
                                <div className="d-flex flex-column gap-2 ">
                                    <figure><img src={blog} alt="first Blog" /></figure>
                                    <div className="d-flex flex-column gap-2">
                                        <h4>The Role of Technical SEO in Website Performance</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur. In nulla nunc arcu velit massa mauris molestie hac. Hac arcu amet nullam pellentesque. Urna eu  felis sodales sit non.Lore ipsum dolor sit amet  In nulla nunc arcu velit massa mauris molestie</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="service-us-tab">

                                                <div className="service-circle"></div>

                                                <div className="service-text">
                                                    <span className="service-word">Our</span>
                                                    <span className="service-word"> Blogs</span>
                                                </div>

                                                <span className="service-line"></span>

                                            </div>
                                            <a href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="d-flex flex-column gap-2">
                                    <div className="d-flex flex-column flex-md-row gap-2">
                                        <figure className='SecondBlog'><img src={blog2} alt="Second Blog"  className="border "/></figure>
                                        <div className="d-flex flex-column gap-2 align-items-start justify-content-center">
                                            <h4>The Impact Of Voice Search On SEO</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur In nulla nunc arcu velit massa mauris molestie hac. Hac arcu amet nullam pellentesque.</p>
                                           < a href="#">Read More</a>
                                        </div>
                                        
                                    </div>
                                     <div className="d-flex flex-column flex-md-row gap-2">
                                        <figure className='SecondBlog'><img src={blog3} alt="Third Blog"  className="border "/></figure>
                                        <div className="d-flex flex-column gap-2 align-items-start justify-content-center">
                                            <h4>The Impact Of Voice Search On SEO</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur In nulla nunc arcu velit massa mauris molestie hac. Hac arcu amet nullam pellentesque.</p>
                                           < a href="#">Read More</a>
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
export default Blog