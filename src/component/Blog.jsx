
import React from "react";
import { Link } from "react-router-dom";
import "./Component.css";
import blogData from "../data/blogData";

function Blog() {
  const [featuredBlog, ...otherBlogs] = blogData;

  return (
    <section className="Blog">
      <div className="container">
        <div className="Blog-header">
          <h2>
            Read Our Latest <span className="span">Blogs & Insights</span>
          </h2>
        </div>

        <div className="row g-4">
          <div className="col-md-6">
            <article className="Blog-featured">
              <Link
                to={`/BlogDetails/${featuredBlog.id}`}
                className="Blog-image-link"
              >
                <figure className="Blog-featured-image">
                  <img src={featuredBlog.image} alt={featuredBlog.title} />
                  <div className="Blog-image-overlay">
                    <span className="Blog-category">
                      {featuredBlog.category}
                    </span>
                    <h3>{featuredBlog.title}</h3>
                    <span className="Blog-overlay-link">Read Article ↗</span>
                  </div>
                </figure>
              </Link>

              <h4>{featuredBlog.title}</h4>
              <p>{featuredBlog.excerpt}</p>

              <div className="Blog-card-footer">
                <div className="service-us-tab">
                  <div className="service-circle"></div>
                  <div className="service-text">
                    <span className="service-word">Our</span>
                    <span className="service-word"> Blogs</span>
                  </div>
                  <span className="service-line"></span>
                </div>

                <Link to={`/BlogDetails/${featuredBlog.id}`}>
                  Read More ↗
                </Link>
              </div>
            </article>
          </div>

          {/* Two Smaller Blogs */}
          <div className="col-md-6">
            <div className="Blog-list">
              {otherBlogs.map((item) => (
                <article className="Blog-small-card" key={item.id}>
                  <Link
                    to={`/BlogDetails/${item.id}`}
                    className="Blog-small-image"
                  >
                    <img src={item.image} alt={item.title} />
                  </Link>

                  <div className="Blog-small-content">
                    <span className="Blog-small-category">
                      {item.category}
                    </span>

                    <h4>{item.title}</h4>
                    <p>{item.excerpt}</p>

                    <Link to={`/BlogDetails/${item.id}`}>
                      Read More ↗
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
