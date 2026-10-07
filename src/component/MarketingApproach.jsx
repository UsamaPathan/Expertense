import React from "react";
import "./Component.css";

function MarketingApproach({
  title = "A Step By Step Guide To Our",
  highlight = "Marketing Approach",
  description = "Lorem ipsum dolor sit amet consectetur. In nulla nunc arcu velit massa mauris molestie hac. hac arcu amet ullam pellentesque. urna eu felis sodales sit non. Lorem ipsum dolor sit amet in nulla nunc arcu velit massa mauris molestie hac. hac arcu amet ullam pellentesque.",
  processTitle = "Working Process",
  cards = [],
}) {
  return (
    <section className="MarketingApproach">

      <div className="container">


        <div className="row approach-top align-items-start">

          <div className="col-md-6 col-12">
            <h2 className="approach-title">
              {title}{" "}
              <span className="span">
                {highlight}
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="col-md-6 col-12">
            <p className="approach-description">
              {description}
            </p>
          </div>

        </div>


        {/* ================= BOTTOM ================= */}

        <div className="row approach-bottom">

          {/* LEFT VERTICAL TAB */}
          <div className="col-auto">

            <div className="process-tab">

              <span className="process-line"></span>

              <div className="process-text">
                <h5> {processTitle}</h5>
               
              </div>

              <div className="process-circle"></div>

            </div>

          </div>


          {/* CARDS */}
          <div className="col">

            <div className="row g-4">

              {cards.map((card, index) => (

                <div
                  className="col-lg-4 col-md-6 col-12"
                  key={index}
                >

                  <div className="approach-card">

                    <h4>
                      {card.title}
                    </h4>

                    <p>
                      {card.description}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default MarketingApproach;