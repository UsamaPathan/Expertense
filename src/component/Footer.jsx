import React from 'react'
import './Component.css'
import '../pages/Index.css'
import phone from '../images/phone.png'
import email from '../images/email.png'
import Button2 from './Button2'
import { NavLink } from "react-router-dom";
function Footer() {
    return (
        <>
            <footer className='Footer'>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-3 col-6">
                            <div className="d-flex flex-column gap-4">
                                <h5>About Us</h5>
                                <NavLink to="/about">About Us</NavLink>
                                <NavLink to="/service">Services</NavLink>
                                <NavLink to="/service">Marketing</NavLink>
                                <NavLink to="/team">Testimonials</NavLink>

                            </div>

                        </div>

                        <div className="col-md-3 col-6">
                            <div className="d-flex flex-column gap-4">
                                <h5>Quick Links</h5>
                                <NavLink to="#">Keyword research</NavLink>
                                <NavLink to="#">Social Media Marketing</NavLink>
                                <NavLink to="#">Content Marketing</NavLink>
                                <NavLink to="#">Content Marketing</NavLink>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="d-flex flex-column gap-3">
                                <h5>Contact Us</h5>
                                 <div className="d-flex flex-row flex-md-column gap-3">
                                <div className="d-flex gap-2">
                                    <div className="service-us-tab">

                                        <div className="service-circle d-flex align-items-center justify-content-center"><figure className='m-0'><img src={phone} alt="" /></figure></div>

                                    </div>
                                    <div className="d-flex flex-column gap-1">
                                        <h5>Phone</h5>
                                        <p>+92456789013</p>
                                    </div>

                                </div>
                                <div className="d-flex align-items-center  gap-2">
                                    <div className="service-us-tab">

                                        <div className="service-circle d-flex align-items-center justify-content-center"><figure className='m-0'><img src={email} alt="" /></figure></div>

                                    </div>
                                    <div className="d-flex flex-column gap-1">
                                        <h5>Email</h5>
                                        <p>info@expertense.com</p>
                                    </div>

                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="d-flex flex-column gap-4">
                                <h5>Newsletter</h5>
                                <p>Subscribe to our newsletter to get the latest updates.</p>
                                <div className="input-group">
                                    <input type="email" className="form-control" placeholder="Enter Your Email" />
                                </div>
                                    <Button2 text="Subscribe"  variant="dark"/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer