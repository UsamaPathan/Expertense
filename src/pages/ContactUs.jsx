import React, { useState} from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Button2 from "../component/Button2";
import "./Index.css";
import PreFooter from "../component/PreFooter";
import Footer from "../component/Footer";
import CopyRight from "../component/CopyRight";

function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        website: "",
        comments: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
            ...(name === "email" ? { email: "" } : {}),
        }));

        setSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\+?[0-9\s()-]{7,20}$/;

        if (!formData.name.trim()) {
            newErrors.name = "Please enter your name.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Please enter your email.";
        } else if (!emailPattern.test(formData.email.trim())) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Please enter your phone number.";
        } else if (!phonePattern.test(formData.phone.trim())) {
            newErrors.phone = "Please enter a valid phone number.";
        }

        if (!formData.comments.trim()) {
            newErrors.comments = "Please enter your comments.";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setSubmitted(true);
            setFormData({
                name: "",
                email: "",
                phone: "",
                website: "",
                comments: "",
            });
        }
    };

    const contactItems = [
        {
            title: "Phone",
            value: "+123456789013",
            icon: <FaPhoneAlt />,
            href: "tel:+123456789013",
        },
        {
            title: "Email",
            value: "Name@Email.Com",
            icon: <FaEnvelope />,
            href: "mailto:Name@Email.Com",
        },
        {
            title: "Location",
            value: "Envato Street 123 UK",
            icon: <FaMapMarkerAlt />,
            href: "https://maps.google.com/?q=Envato+Street+123+UK",
        },
    ];

    return (
        <>
            <section className="ContactUs">
                <div className="container">
                    <div className="d-flex gap-3 align-items-center justify-content-between flex-column flex-md-row mb-3">

                        <div className="service-us-tab">

                            <div className="service-circle"></div>

                            <div className="service-text">
                                <span className="about-word">Contact</span>
                                <span className="us-word"> Us</span>
                            </div>

                            <span className="service-line"></span>

                        </div>


                        <div className="d-flex align-items-lg-start">

                            <h2>
                                Ready to Work your{" "}
                                <span className="span">
                                    Next Projects
                                </span>{" "}
                            </h2>

                        </div>

                        <div className="">
                            <Button2 text="Contact Us" variant="dark" />
                        </div>
                    </div>

                    <div className="ContactUs-container">

                        <div className="ContactUs-form-card">
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="ContactUs-input-grid">
                                    <div className="ContactUs-field">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={errors.name ? "is-invalid" : ""}
                                            aria-invalid={Boolean(errors.name)}
                                            aria-describedby={errors.name ? "contact-name-error" : undefined}
                                        />
                                        {errors.name && (
                                            <small id="contact-name-error">{errors.name}</small>
                                        )}
                                    </div>

                                    <div className="ContactUs-field">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={errors.email ? "is-invalid" : ""}
                                            aria-invalid={Boolean(errors.email)}
                                            aria-describedby={errors.email ? "contact-email-error" : undefined}
                                        />
                                        {errors.email && (
                                            <small id="contact-email-error">{errors.email}</small>
                                        )}
                                    </div>

                                    <div className="ContactUs-field">
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={errors.phone ? "is-invalid" : ""}
                                            aria-invalid={Boolean(errors.phone)}
                                            aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                                        />
                                        {errors.phone && (
                                            <small id="contact-phone-error">{errors.phone}</small>
                                        )}
                                    </div>

                                    <div className="ContactUs-field">
                                        <input
                                            type="url"
                                            name="website"
                                            placeholder="Website (Optional)"
                                            value={formData.website}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="ContactUs-field ContactUs-comments-field">
                                    <textarea
                                        name="comments"
                                        placeholder="Comments"
                                        value={formData.comments}
                                        onChange={handleChange}
                                        className={errors.comments ? "is-invalid" : ""}
                                        aria-invalid={Boolean(errors.comments)}
                                        aria-describedby={
                                            errors.comments ? "contact-comments-error" : undefined
                                        }
                                    />
                                    {errors.comments && (
                                        <small id="contact-comments-error">{errors.comments}</small>
                                    )}
                                </div>

                                <div className="ContactUs-submit">
                                    <Button2 text="Send Message" variant="dark" />
                                </div>

                                {submitted && (
                                    <p className="ContactUs-success" role="status">
                                        Your form passed validation successfully!
                                    </p>
                                )}
                            </form>
                        </div>

                        <div className="ContactUs-info-list">
                            {contactItems.map((item) => (
                                <a
                                    href={item.href}
                                    className="ContactUs-info-card"
                                    key={item.title}
                                    target={item.title === "Location" ? "_blank" : undefined}
                                    rel={item.title === "Location" ? "noreferrer" : undefined}
                                >
                                    <div className="ContactUs-icon">
                                        {item.icon}
                                    </div>

                                    <div className="ContactUs-info-text">
                                        <h3>{item.title}</h3>
                                        <p>{item.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="Map">
                <div className="container">
                    <iframe
                        title="Evonicsoft Pvt. Ltd. location map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.7210311399626!2d71.70365697538821!3d29.407715875250414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x827dcbdfcb9aef2d%3A0xe712993641b9e084!2sEvonicsoft%20Pvt.%20Ltd!5e0!3m2!1sen!2s!4v1791969464390!5m2!1sen!2s"
                        
                    ></iframe>
                </div>
            </section>
            <PreFooter />
            <Footer />
            <CopyRight />
        </>
    );
}

export default ContactUs;
