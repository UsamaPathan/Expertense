
import React from "react";
import { useParams, Link } from "react-router-dom";

import blogData from "../data/blogData";
import Button2 from "../component/Button2";
import PreFooter from "../component/PreFooter";
import Footer from "../component/Footer";
import CopyRight from "../component/CopyRight";

import "./Index.css";

function BlogDetails() {
  const { blogId } = useParams();

  const blog = blogData.find((item) => item.id === blogId);

  if (!blog) {
    return (
      <>
        <section className="BlogDetails">
          <div className="container">
            <div className="BlogDetails-not-found">
              <span className="BlogDetails-label">BLOG & INSIGHTS</span>
              <h1>Article Not Found</h1>
              <p>
                This article may have been removed or the link may be incorrect.
              </p>
              <Link to="/" className="BlogDetails-back">
                <Button2 text="Go Back" variant="dark"/>
              </Link>
            </div>
          </div>
        </section>
        <PreFooter />
        <Footer />
        <CopyRight />
      </>
    );
  }

  const relatedBlogs = blogData.filter((item) => item.id !== blog.id);

  return (
    <>

      <main className="BlogDetails">
        {/* Hero */}
        <section className="BlogDetails-hero">
          <div className="container">
            <div className="BlogDetails-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/blog">Blog</Link>
              <span>/</span>
              <span>{blog.category}</span>
            </div>

            <div className="BlogDetails-hero-content">
              <span className="BlogDetails-label">{blog.category}</span>

              <h1>{blog.title}</h1>

              <p className="BlogDetails-excerpt">{blog.excerpt}</p>

              <div className="BlogDetails-meta">
                <span className="BlogDetails-author-mark">E</span>
                <span>Expertense Editorial Team</span>
                <span className="BlogDetails-dot"></span>
                <span>{blog.date}</span>
              </div>
            </div>

            <div className="BlogDetails-cover">
              <img src={blog.image} alt={blog.title} />
              <div className="BlogDetails-cover-badge">
                <span>INSIGHTS</span>
                <strong>Ideas that move businesses forward.</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Article and sidebar */}
        <section className="BlogDetails-main">
          <div className="container">
            <div className="row g-4 g-lg-5">
              <div className="col-lg-8">
                <article className="BlogDetails-article">
                  <div className="BlogDetails-intro">
                    <span className="BlogDetails-label">THE OVERVIEW</span>
                    <h2>Introduction</h2>
                    <p>{blog.excerpt}</p>
                  </div>

                  {blog.content.map((section, index) => (
                    <section
                      className="BlogDetails-content"
                      key={section.heading}
                    >
                      <span className="BlogDetails-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h2>{section.heading}</h2>
                      <p>{section.text}</p>
                    </section>
                  ))}

                  <div className="BlogDetails-article-footer">
                    <div>
                      <span className="BlogDetails-label">CATEGORY</span>
                      <p>{blog.category}</p>
                    </div>

                    <Link to="/blog" className="BlogDetails-text-link">
                      Explore More Articles ↗
                    </Link>
                  </div>
                </article>
              </div>

              {/* Related blogs */}
              <div className="col-lg-4">
                <aside className="BlogDetails-sidebar">
                  <span className="BlogDetails-label">KEEP EXPLORING</span>
                  <h3>Related Articles</h3>
                  <p className="BlogDetails-sidebar-text">
                    Discover more ideas, strategies and insights from our blog.
                  </p>

                  {relatedBlogs.map((item) => (
                    <Link
                      to={`/blog/${item.id}`}
                      className="BlogDetails-related"
                      key={item.id}
                    >
                      <img src={item.image} alt={item.title} />

                      <div>
                        <span>{item.category}</span>
                        <h4>{item.title}</h4>
                        <strong>Read Article ↗</strong>
                      </div>
                    </Link>
                  ))}

                  <div className="BlogDetails-sidebar-cta">
                    <h4>Have a project in mind?</h4>
                    <p>Let's discuss how we can help your business grow.</p>
                    <Link to="/" className="BlogDetails-sidebar-link">
                      Let's Talk ↗
                    </Link>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="BlogDetails-cta">
          <div className="container">
            <div className="BlogDetails-cta-inner">
              <div>
                <span className="BlogDetails-label">LET'S BUILD SOMETHING</span>
                <h2>
                  Turn your ideas into <span>real results.</span>
                </h2>
                <p>
                  Explore how thoughtful design and digital strategy can move
                  your business forward.
                </p>
              </div>

              <Link to="/" className="BlogDetails-cta-button">
                <Button2 text="Explore Our Website" variant="light" />
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
