
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Index.css";
import PreFooter from "../component/PreFooter";
import Footer from "../component/Footer";
import CopyRight from "../component/CopyRight";
import HeroBanner from "../component/HeroBanner";

function ProjectDetails() {
  const location = useLocation();
  const project = location.state?.project;

  if (!project) {
    return (
      <section className="ProjectDetails">
        <div className="container ProjectDetails-empty">
          <span className="ProjectDetails-eyebrow">
            PROJECT PORTFOLIO
          </span>

          <h1>Project details unavailable</h1>

          <p>
            Please return to our project gallery and select a project
            to explore its details.
          </p>

          <Link to="/" className="ProjectDetails-back-button">
            ← Back to Gallery
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main className="ProjectDetails">
    <HeroBanner title={project.title}/>
      <section className="ProjectDetails-top">
        <div className="container">
          <div className="ProjectDetails-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/Projects">Projects</Link>
            <span>/</span>
            <span className="ProjectDetails-current">
              {project.title}
            </span>
          </div>
        </div>
      </section>

      <section className="ProjectDetails-hero">
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5">

            <div className="col-lg-6">
              <div className="ProjectDetails-hero-content">

                <span className="ProjectDetails-eyebrow">
                  FEATURED PROJECT
                </span>

                <h1>{project.title}</h1>

                <p className="ProjectDetails-intro">
                  {project.description}
                </p>

                <div className="ProjectDetails-hero-actions">
                  <Link
                    to="/Projects"
                    className="ProjectDetails-primary-button"
                  >
                    Explore More Projects
                    <span aria-hidden="true"> ↗</span>
                  </Link>
                </div>

                <div className="ProjectDetails-project-label">
                  <span className="ProjectDetails-label-dot"></span>
                  Creative solutions. Meaningful results.
                </div>

              </div>
            </div>

            <div className="col-lg-6">
              <div className="ProjectDetails-image-frame">
                <div className="ProjectDetails-image-accent"></div>

                <img
                  src={project.image}
                  alt={project.title}
                  className="ProjectDetails-main-image"
                />

                <div className="ProjectDetails-image-caption">
                  <span>OUR WORK</span>
                  <span>PROJECT — {String(project.id).padStart(2, "0")}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="ProjectDetails-overview">
        <div className="container">
          <div className="row g-4">

            <div className="col-lg-4">
              <span className="ProjectDetails-section-label">
                THE OVERVIEW
              </span>

              <h2>
                Turning ideas into{" "}
                <span>impactful experiences.</span>
              </h2>
            </div>

            <div className="col-lg-8">
              <div className="ProjectDetails-overview-copy">
                <p>
                  Every project begins with an idea and a clear objective.
                  Our approach combines creative thinking, thoughtful
                  planning and modern digital solutions to help businesses
                  communicate their value effectively.
                </p>

                <p>
                  This project highlights our commitment to quality,
                  usability and purposeful design. We focus on building
                  experiences that look polished and support the goals
                  behind the project.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="ProjectDetails-highlights">
        <div className="container">

          <div className="ProjectDetails-highlights-heading">
            <span className="ProjectDetails-section-label">
              OUR APPROACH
            </span>

            <h2>What makes this project special?</h2>
          </div>

          <div className="row g-3 g-lg-4">

            <div className="col-md-4">
              <article className="ProjectDetails-highlight-card">
                <span className="ProjectDetails-highlight-number">
                  01
                </span>

                <h3>Strategic Thinking</h3>

                <p>
                  A purposeful approach built around the project's goals
                  and audience.
                </p>
              </article>
            </div>

            <div className="col-md-4">
              <article className="ProjectDetails-highlight-card">
                <span className="ProjectDetails-highlight-number">
                  02
                </span>

                <h3>Creative Execution</h3>

                <p>
                  A thoughtful visual direction that brings the project
                  concept to life.
                </p>
              </article>
            </div>

            <div className="col-md-4">
              <article className="ProjectDetails-highlight-card">
                <span className="ProjectDetails-highlight-number">
                  03
                </span>

                <h3>Quality Focus</h3>

                <p>
                  Careful attention to detail, consistency and the
                  overall user experience.
                </p>
              </article>
            </div>

          </div>
        </div>
      </section>

      <section className="ProjectDetails-cta">
        <div className="container">
          <div className="ProjectDetails-cta-inner">

            <div>
              <span className="ProjectDetails-section-label">
                HAVE A PROJECT IN MIND?
              </span>

              <h2>
                Let's create something{" "}
                <span>remarkable.</span>
              </h2>
            </div>

            <Link to="/Projects" className="ProjectDetails-cta-button">
              Back to Projects <span aria-hidden="true">↗</span>
            </Link>

          </div>
        </div>
      </section>
      <PreFooter />
      <Footer />
      <CopyRight />

    </main>
  );
}

export default ProjectDetails;
