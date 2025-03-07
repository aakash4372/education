import React, { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import '../App.css';
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Recognitions = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="recognition-section-bg">
            <h2 className="about-title pb-5 pt-5 text-center" data-aos="zoom-in" data-aos-duration="1500">
                Our Recognitions
            </h2>
            <Container className="py-5">
                <Row className="align-items-center">
                    {/* Left Column */}
                    <Col lg={6} className="text-center text-lg-start mb-4 mb-lg-0 px-lg-5" data-aos="fade-right" data-aos-duration="1500">
                        <Image
                            src={`${process.env.PUBLIC_URL}/img/msme.png`}
                            alt="MSME Certification"
                            className="iso-image"
                        />
                        <p className="about-text">
                            LEARNENG EDUCATION has achieved a major milestone! We're thrilled to share that our organization is now registered with the Ministry of Micro, Small and Medium Enterprises (MSME), Government of India. This achievement reinforces our dedication to delivering exceptional quality, customer experience, and continuous improvement while supporting the nation's economic growth.
                        </p>
                    </Col>

                    {/* Right Column */}
                    <Col lg={6} className="text-center text-lg-start px-lg-5" data-aos="fade-left" data-aos-duration="1500">
                        <Image
                            src={`${process.env.PUBLIC_URL}/img/iso.jpg`}
                            alt="ISO Certification"
                            className="iso-image"
                        />
                        <p className="about-text">
                            At LearnEng Education, we are proud to be ISO-certified, ensuring excellence in language education. Our certification reflects our commitment to quality, consistency, and globally recognized standards. We provide structured learning programs that enhance language proficiency and academic success. This recognition reinforces our dedication to continuous improvement and innovation.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Recognitions;
