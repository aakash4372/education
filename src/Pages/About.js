import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS library
import "../App.css"; // Import CSS file

const AboutSection = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="about-bg-section pb-5">
            <section className="about-section container">
                <h2 className="about-title pb-5 text-center" data-aos="zoom-in" data-aos-duration="1500">
                    About Us <span className="line"></span>
                </h2>

                <div className="row align-items-center">
                    {/* Video Section */}
                    <div className="col-lg-6 col-md-12 text-center" data-aos="fade-right" data-aos-duration="1500">
                        <div className="video-container" >
                            <video className="about-video w-100" autoPlay loop muted>
                                <source src={`${process.env.PUBLIC_URL}/img/logovideo.mp4`} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="col-lg-6 col-md-12" data-aos="fade-left" data-aos-duration="1500">
                        <p className="about-text">
                            LEARNENG EDUCATION is your trusted partner in enhancing language education.
                            With a strong commitment to language proficiency, we proudly serve schools in Tamilnadu and pondicherry. We are also proud to be registered with the Ministry of MSME, Government of India, and ISO 9001:2015 certified, ensuring excellence in education, quality management, and continuous improvement.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutSection;
