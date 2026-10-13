
import React from "react";
import { Link, useParams } from "react-router-dom";

import PreFooter from "../component/PreFooter";
import Footer from "../component/Footer";
import CopyRight from "../component/CopyRight";

import blogData from "../data/blogData";
import "./Index.css";

function BlogDetails() {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id === id);

  if (!blog) {
    return (
      <>
        <main className="BlogDetails">
          <section className="BlogDetails-not-found container">
            <span className="BlogDetails-label">BLOG & INSIGHTS</span>
            <h1>Article not found</h1>
            <p>
              This article may have been removed or the link may be incorrect.
            </p>
            <Link to="/" className="BlogDetails-button">
              ← Back to Home
            </Link>
          </section>
        </main>

        <PreFooter />
        <Footer />
        <CopyRight />
      </>
    );
  }

  return (
    <>

      <main className="BlogDetails">
        <section className="BlogDetails-hero">
          <div className="container">
            <div className="BlogDetails-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/Blog">Blogs</Link>
              <span>/</span>
              <span>{blog.category}</span>
            </div>

            <div className="BlogDetails-hero-content">
              <span className="BlogDetails-label">{blog.category}</span>

              <h1>{blog.title}</h1>

              <p className="BlogDetails-excerpt">{blog.excerpt}</p>

              <div className="BlogDetails-meta">
                <span>Expertense Editorial Team</span>
                <span className="BlogDetails-meta-dot"></span>
                <span>{blog.date}</span>
              </div>
            </div>

            <div className="BlogDetails-cover">
              <img src={blog.image} alt={blog.title} />
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="BlogDetails-body">
          <div className="container">
            <div className="row justify-content-center g-5">
              <div className="col-lg-8">
                <article className="BlogDetails-article">
                  <span className="BlogDetails-label">THE FULL ARTICLE</span>

                  <h2>Introduction</h2>

                  <p>{blog.excerpt}</p>

                  {blog.content.map((section, index) => (
                    <section
                      className="BlogDetails-content-section"
                      key={section.heading}
                    >
                      <span className="BlogDetails-section-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h2>{section.heading}</h2>
                      <p>{section.text}</p>
                    </section>
                  ))}

                  <div className="BlogDetails-article-footer">
                    <span>Category: {blog.category}</span>
                    <Link to="/Blog">Explore More Blogs ↗</Link>
                  </div>
                </article>
              </div>

              <aside className="col-lg-4">
                <div className="BlogDetails-sidebar">
                  <span className="BlogDetails-label">MORE INSIGHTS</span>
                  <h3>Continue Reading</h3>

                  {blogData
                    .filter((item) => item.id !== blog.id)
                    .map((item) => (
                      <Link
                        to={`/BlogDetails/${item.id}`}
                        className="BlogDetails-related"
                        key={item.id}
                      >
                        <img src={item.image} alt={item.title} />

                        <span>
                          <small>{item.category}</small>
                          <strong>{item.title}</strong>
                          <em>Read Article ↗</em>
                        </span>
                      </Link>
                    ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="BlogDetails-cta">
          <div className="container">
            <div className="BlogDetails-cta-inner">
              <div>
                <span className="BlogDetails-label">LET'S CONNECT</span>
                <h2>
                  Ready to grow your <span>digital presence?</span>
                </h2>
              </div>

              <Link to="/" className="BlogDetails-button">
                Explore Our Website ↗
              </Link>
            </div>
          </div>
        </section>
      </main>

      <PreFooter />
      <Footer />
      <CopyRight />
    </>
  );
}

export default BlogDetails;
