import React from "react";
import "./Button.css";

function TextSlider() {
  const services = [
    "Marketing Solutions",
    "Search Engine Optimization",
    "Research & Analysis",
    "SEO Strategy Development",
  ];

  return (
    <section className="text-slider">

      <div className="text-slider-track">

        {/* First Set */}
        <div className="text-slider-group">
          {services.map((service, index) => (
            <span className="slider-text" key={index}>
              {service}
            </span>
          ))}
        </div>

        {/* Duplicate Set */}
        <div className="text-slider-group" aria-hidden="true">
          {services.map((service, index) => (
            <span className="slider-text" key={index}>
              {service}
            </span>
          ))}
        </div>

      </div>

    </section>
  );
}

export default TextSlider;