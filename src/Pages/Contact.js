import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    const navigate = useNavigate(); // Initialize useNavigate

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents page reload

        // Form validation
        if (!formData.name || !formData.phone || !formData.message) {
            toast.error("All fields are required!");
            return;
        }

        toast.success("Form submitted successfully!");

        // Reset form after successful submission
        setFormData({ name: "", phone: "", message: "" });

        // Redirect to "/" after 2 seconds
        setTimeout(() => {
            navigate("/");
        }, 2000);
    };

    return (
        <div className="contact-section mb-5">
            <Toaster /> {/* Hot Toast Container */}
            <h2 className="about-title mt-5 mb-5 text-center" data-aos="zoom-in" data-aos-duration="1500">Contact us</h2>
            <div className="contact-info" data-aos="zoom-in" data-aos-duration="1000">
                <p className="text-center text-muted">
                    Have questions? Fill out the form, and we'll get back to you!
                </p>
                <div className="contact-container">
                    <div className="contact-content">
                        <div className="contact-form">
                            <form onSubmit={handleSubmit} >
                                {/* Name Field */}
                                <div className="mb-3">
                                    <label className="form-label">
                                        Name <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="form-control input-field"
                                        placeholder="First Name"
                                    />
                                </div>

                                {/* Phone Field */}
                                <div className="mb-3">
                                    <label className="form-label">
                                        Phone <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="form-control input-field"
                                        placeholder="Phone Number"
                                    />
                                </div>

                                {/* Message Field */}
                                <div className="mb-3">
                                    <label className="form-label">
                                        Leave us a few words <span className="text-danger">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="form-control input-field"
                                        rows="3"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-danger">
                                        SUBMIT
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactForm;
