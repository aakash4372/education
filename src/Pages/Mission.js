import React, { useEffect } from "react";
import "../App.css"; 
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS library


const Mission = () => {
     useEffect(() => {
        AOS.init();
     }, []);

    return (
        <div className="mission-bg-section">
            <section className="mission-section container py-5">
                <h2 className="about-title mb-0 text-center" data-aos="zoom-in" data-aos-duration="1500">
                    Our Mission
                </h2>
                <div className="row align-items-center pt-0">
                    {/* Text Section */}
                    <div className="col-lg-6 col-md-12" data-aos="fade-right" data-aos-duration="1500">
                        <p className="about-text mission-text">
                            Our mission is to transform students into confident and effective
                            communicators. We understand that English proficiency is not just a subject;
                            it's a fundamental skill for success in today's globalized world.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="col-lg-6 col-md-12 text-center" data-aos="fade-left" data-aos-duration="1500">
                        <img src={`${process.env.PUBLIC_URL}/img/logo2.png`} alt="LearnEng Education" className="mission-image img-fluid" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Mission;
