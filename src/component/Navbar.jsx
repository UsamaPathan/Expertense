import React from 'react';
import Logo from '../images/logo.png';
import Button from './Button';
import './Navbar.css';

function Navbar() {

  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary py-3">

      <div className="container-fluid navbar-inner">

        <div className="navbar-left">

          <a className="navbar-brand me-3" href="#Index">
            <img src={Logo} alt="Expertense" />
          </a>

        </div>


        <div
          className="collapse navbar-collapse navbar-center"
          id="navbarNavDropdown"
        >

          <div className="mobile-sidebar-header align-items-center">

            <a  href="#Index"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                className="d-block d-md-none">
              <img src={Logo} alt="Expertense" />
            </a>

            <button
              className="mobile-close d-block d-md-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-label="Close menu"
            >
              ×
            </button>

          </div>


          <ul className="navbar-nav mx-auto align-items-center">

            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#Index"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#About"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
              >
                About
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#service"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
              >
                Service
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#Blog"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
              >
                Blog
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#Projects"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
              >
                Projects
              </a>
            </li>

          </ul>

        </div>


        <div className="navbar-right d-flex align-items-center">
          <Button text='Contact Us'/>
        </div>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >

          <span className="navbar-toggler-icon"></span>

        </button>

      </div>

    </nav>
  );
}

export default Navbar;