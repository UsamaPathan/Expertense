import React, { useState } from "react";
import Logo from "../images/logo.png";
import Button from "./Button";

import "./Navbar.css";

import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary py-3">

      <div className="container-fluid navbar-inner">

        {/* LOGO */}
        <div className="navbar-left">
          <NavLink className="navbar-brand me-3" to="/">
            <img src={Logo} alt="Expertense" />
          </NavLink>
        </div>


        {/* NAVIGATION */}
        <div
          className={`navbar-collapse navbar-center ${menuOpen ? "show" : "collapse"
            }`}
          id="navbarNavDropdown"
        >

          {/* Mobile Header */}
          <div className="mobile-sidebar-header align-items-center">

            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="d-block d-md-none"
            >
              <img src={Logo} alt="Expertense" />
            </NavLink>

            <button
              className="mobile-close d-block d-md-none"
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>

          </div>


          {/* LINKS */}
          <ul className="navbar-nav mx-auto align-items-center">

            {/* HOME */}
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                onClick={() => setMenuOpen(false)}

              >
                Home
              </NavLink>
            </li>


            {/* ABOUT */}
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </NavLink>
            </li>


            {/* SERVICE */}
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/service"
                onClick={() => setMenuOpen(false)}

              >
                Service
              </NavLink>
            </li>


            {/* BLOG */}
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/blog"
                onClick={() => setMenuOpen(false)}

              >
                Blog
              </NavLink>
            </li>


            {/* PROJECTS */}
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/projects"
                onClick={() => setMenuOpen(false)}

              >
                Projects
              </NavLink>
            </li>

          </ul>

        </div>


        {/* RIGHT BUTTON */}
        <div className="navbar-right d-flex align-items-center">
          <Button text="Contact Us" />
        </div>


        {/* MOBILE TOGGLE */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

      </div>

    </nav>
  );
}

export default Navbar;