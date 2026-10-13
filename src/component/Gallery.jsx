
import React from "react";
import { Link } from "react-router-dom";
import "./Component.css";

import gallery1 from "../images/gallery1.jpg";
import gallery2 from "../images/gallery2.jpg";
import gallery3 from "../images/gallery3.jpg";
import gallery4 from "../images/gallery4.jpg";
import gallery5 from "../images/gallery5.jpg";
import gallery from "../images/gallery.jpg";
import Button2 from "./Button2";

const projects = [
    {
        id: 1,
        title: "Keyword Research & Analysis",
        image: gallery1,
        description: "Keyword research and SEO analysis project.",
    },
    {
        id: 2,
        title: "Digital Marketing Strategy",
        image: gallery2,
        description: "A digital marketing strategy for business growth.",
    },
    {
        id: 3,
        title: "Team Collaboration",
        image: gallery3,
        description: "A collaborative project focused on business results.",
    },
    {
        id: 4,
        title: "Business Growth",
        image: gallery4,
        description: "Business analysis and digital growth solutions.",
    },
    {
        id: 5,
        title: "Brand Design",
        image: gallery5,
        description: "Creative design and brand development.",
    },
    {
        id: 6,
        title: "SEO Performance",
        image: gallery,
        description: "SEO performance monitoring and optimization.",
    },
];


function Gallery() {
    return (
        <section className="Gallery">
            <div className="container">

                <div className="d-flex gap-3 align-items-center justify-content-between flex-column flex-md-row mb-5">

                    <div className="service-us-tab">

                        <div className="service-circle"></div>

                        <div className="service-text">
                            <span className="about-word">Our</span>
                            <span className="us-word"> Projects</span>
                        </div>

                        <span className="service-line"></span>

                    </div>


                    <div className="d-flex align-items-lg-start">

                        <h2>
                            Some of Projects We{" "}
                            <span className="span">
                                Have Completed
                            </span>{" "}
                        </h2>

                    </div>


                    <Button2 text="read More" />

                </div>

                <div className="Gallery-grid">
                    {projects.map((project) => (
                        <article className="Gallery-card" key={project.id}>
                            <img
                                className="Gallery-image"
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                            />

                            <div className="Gallery-overlay">
                                <div className="Gallery-overlay-content">
                                    <h3>{project.title}</h3>

                                    <Link
                                        to="/ProjectDetails"
                                        state={{ project }}
                                        className="Gallery-read-more"
                                    >
                                        Read More <span aria-hidden="true">↗</span>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Gallery;
