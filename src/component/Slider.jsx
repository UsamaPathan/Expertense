import React from "react";
import "./Component.css";

function TextSlider({ items, type = "text" }) {
  return (
    <section className={`text-slider ${type}-slider`}>
      <div className="text-slider-track">

        {/* First Set */}
        <div className="text-slider-group">
          {items.map((item, index) => (
            <div className="slider-item" key={index}>
              {type === "text" ? (
                <span className="slider-text">{item}</span>
              ) : (
                <img src={item} alt={`Slide ${index + 1}`} />
              )}
            </div>
          ))}
        </div>

        {/* Duplicate Set */}
        <div className="text-slider-group" aria-hidden="true">
          {items.map((item, index) => (
            <div className="slider-item" key={index}>
              {type === "text" ? (
                <span className="slider-text">{item}</span>
              ) : (
                <img src={item} alt="" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TextSlider;