import React, { useState } from "react";
import customerReviews from "../data/customerReviews";
import "./Component.css";

function Reviews() {
  const [reviewIndex, setReviewIndex] = useState(0);

  const currentReview = customerReviews[reviewIndex];

  const previousReview = () => {
    setReviewIndex((prev) =>
      prev === 0 ? customerReviews.length - 1 : prev - 1
    );
  };

  const nextReview = () => {
    setReviewIndex((prev) =>
      prev === customerReviews.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="Reviews">
      <div className="container">

        {/* Heading */}
        <div className="row reviews-heading align-items-start g-5">
          <div className="col-md-6 col-12">
            <h2>
              What Our Client Say On{" "}
              <span className="span">Google Reviews</span>
            </h2>
          </div>

          <div className="col-md-6 col-12">
            <p>
              Lorem ipsum dolor sit amet consectetur. In nulla nunc arcu velit massa mauris molestie hac. Hac arcu amet nullam pellentesque. Urna eu  felis sodales sit non.Lore ipsum dolor sit amet  In nulla nunc arcu velit massa mauris molestie hac. Hac arcu amet nullam pellentesque.
            </p>
          </div>
        </div>

        {/* Review Content */}
        <div className="reviews-content">

          {/* Vertical Testimonial Tab */}
          <div className="reviews-tab">
            <span className="reviews-line"></span>
            <span className="reviews-tab-text">Testimonials</span>
            <span className="reviews-circle"></span>
          </div>

          {/* Review Card */}
          <div className="reviews-card">

            {/* Customer Image */}
            <div className="reviews-photo">
              <img
                src={currentReview.image}
                alt={currentReview.name}
              />
            </div>

            {/* Review Details */}
            <div className="reviews-details">

              <div
                className="reviews-rating"
                aria-label={`${currentReview.rating} out of 5 stars`}
              >
                {"★".repeat(currentReview.rating)}
                {"☆".repeat(5 - currentReview.rating)}
              </div>

              <p className="reviews-text">
                {currentReview.text}
              </p>

              <div className="reviews-customer">

                <img
                  src={currentReview.image}
                  alt=""
                  className="reviews-avatar"
                />

                <div className="reviews-customer-info">
                  <h4>{currentReview.name}</h4>
                  <span className="span">{currentReview.role}</span>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="reviews-controls">

          <button
            type="button"
            className="reviews-arrow reviews-arrow-prev"
            onClick={previousReview}
            aria-label="Previous review"
          >
            ←
          </button>

          <button
            type="button"
            className="reviews-arrow reviews-arrow-next"
            onClick={nextReview}
            aria-label="Next review"
          >
            →
          </button>

        </div>

      </div>
    </section>
  );
}

export default Reviews;