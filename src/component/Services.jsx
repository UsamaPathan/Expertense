import React, { useState } from 'react';

import './Component.css';
import Button2 from './Button2';
import '../pages/Index.css';
import service from '../images/service.jpg'

function Services() {

    const [activeService, setActiveService] = useState(0);

    const services = [
        {
            title: "Content Marketing",
            description:
                "Lorem ipsum dolor sit amet consectetur. In nulla nunc arcu velit massa mauris molestie hac. Hac arcu amet nullam pellentesque. Urna eu felis sodales sit non."
        },
        {
            title: "Social Media Marketing",
            description:
                "Lorem ipsum dolor sit amet consectetur. Social media marketing helps businesses connect with their audience and build a strong online presence."
        },
        {
            title: "Search Engine Optimization",
            description:
                "Lorem ipsum dolor sit amet consectetur. SEO helps improve website visibility, increase organic traffic and reach the right audience."
        },
        {
            title: "Keyword Research",
            description:
                "Lorem ipsum dolor sit amet consectetur. Keyword research helps identify valuable search terms and understand what users are looking for."
        },
        {
            title: "Website Design And Development",
            description:
                "Lorem ipsum dolor sit amet consectetur. We create responsive and user-friendly websites designed to provide a smooth experience across all devices."
        }
    ];

    return (

        <section className="Services">

            <div className="container">


                <div className="d-flex gap-3 align-items-center justify-content-between flex-column flex-md-row">

                    <div className="service-us-tab">

                        <div className="service-circle"></div>

                        <div className="service-text">
                            <span className="service-word">About</span>
                            <span className="service-word"> Us</span>
                        </div>

                        <span className="service-line"></span>

                    </div>


                    <div className="d-flex align-items-lg-start">

                        <h2>
                            We Provide the Best{" "}
                            <span className="span">
                                SEO Digital Marketing
                            </span>{" "}
                            Services
                        </h2>

                    </div>


                    <Button2 text="read More" />

                </div>



                <div className="row services-content">


                    <div className="col-md-6 col-12">

                        <div className="service-accordion">

                            {services.map((service, index) => (

                                <div
                                    className={`service-item ${activeService === index
                                        ? "active"
                                        : ""
                                        }`}
                                    key={index}
                                >


                                    <div
                                        className="service-item-header"
                                        onClick={() =>
                                            setActiveService(index)
                                        }
                                    >

                                        <h4>
                                            {service.title}
                                        </h4>


                                        <span className="service-arrow">

                                            {activeService === index
                                                ? "↑"
                                                : "↓"}

                                        </span>

                                    </div>



                                    {activeService === index && (

                                        <div className="service-description">

                                            <p>
                                                {service.description}
                                            </p>

                                        </div>

                                    )}

                                </div>

                            ))}

                        </div>

                    </div>



                    <div className="col-md-6 col-12">

                        <div className="service-right">
                            <div> <p>
                                Lorem ipsum dolor sit amet consectetur. In nulla nunc arcu velit massa mauris molestie hac. Hac arcu amet nullam pellentesque. Urna eu  felisHac arcu amet nullam pellentesque. Urna eu  felis
                            </p></div>

                            <figure className="service-image">

                                <img
                                    src={service}
                                    alt=''
                                />

                            </figure>


                            <div className="service-red-box">

                                <p>
                                    Lorem ipsum dolor sit amet consectetur. In nulla nunc arcu velit massa mauris molestie hac. Hac arcu amet nullam pellentesque. Urna eu  felisHac arcu amet nullam pellentesque. Urna eu  felis
                                </p>

                                <a href="#read-more">
                                    Read More
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );
}

export default Services;