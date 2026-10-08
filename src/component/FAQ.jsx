import React, { useState } from "react";
import Button2 from "./Button2";
import './Component.css'
function FAQ({ image }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is SEO and why is it important?",
      answer:
        "SEO helps improve your website visibility on search engines and brings more relevant visitors to your website."
    },
    {
      question: "How long does it take to see SEO results?",
      answer:
        "SEO results depend on your industry, competition and website condition. Consistent optimization normally produces results over time."
    },
    {
      question: "How can SEO improve my business?",
      answer:
        "A strong SEO strategy can increase organic traffic, improve online visibility and help you reach potential customers."
    },
    {
      question: "Do you provide customized SEO strategies?",
      answer:
        "Yes. We analyze your business, competitors and target audience before creating a strategy according to your specific goals."
    },
    {
      question: "How do you measure SEO performance?",
      answer:
        "We monitor important metrics such as organic traffic, keyword rankings, conversions and overall website performance."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="Faq">

      <div className="container">

        <div className="row">


          <div className="col-md-7 col-12">

            <h2 className="faq-title">
              Frequently Asked{" "}
              <span className="span">Questions</span>
            </h2>

            <p className="faq-intro">
              Lorem ipsum dolor sit amet consectetur. In nulla nunc arcu
              velit massa mauris molestie hac. hac arcu amet ullam
              pellentesque. urna eu felis sodales sit non.
            </p>



            <div className="faq-list">

              {faqs.map((faq, index) => {

                const isActive = activeIndex === index;

                return (
                  <div
                    className={`faq-item ${
                      isActive ? "active" : ""
                    }`}
                    key={index}
                  >

                    <div
                      className="faq-question"
                      onClick={() => toggleFAQ(index)}
                    >

                      <h4>{faq.question}</h4>

                      <span className="faq-arrow">
                        {isActive ? "↑" : "↓"}
                      </span>

                    </div>



                    {isActive && (
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}

                  </div>
                );

              })}

            </div>

          </div>



          <div className="col-md-5 col-12">

            <div className="faq-image-wrapper">

              <img
                src={image}
                alt="Frequently Asked Questions"
                className="faq-image"
              />

            </div>

          </div>

        </div>
       <Button2 text="Read More" variant="dark" />




      </div>

    </section>
  );
}

export default FAQ;