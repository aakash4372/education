import React, { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Advisor = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,  // Smooth animations
            once: true,  // Animations run only once
            easing: "ease-in-out",
        });
    }, []);

    return (
        <div className="speaker-section-bg">
            <h2 className="about-title pt-5 pb-4 text-center" data-aos="zoom-in">
            Our Legal Advisor
            </h2>

            {/* Advisor 1: Harikrishnan */}
            <Container className="py-5">
                <Row className="align-items-center">
                    <Col lg={6} className="text-center mb-4 mb-md-0" data-aos="fade-right">
                        <Image
                            src={`${process.env.PUBLIC_URL}/img/advisor1.jpg`}
                            alt="Harikrishnan Advisor"
                            className="director-image"
                            fluid
                        />
                    </Col>
                    <Col lg={6} data-aos="fade-left">
                        <h5 className="director-title text-md-center text-lg-start pt-md-3">
                            <strong>Harikrishnan S</strong>
                        </h5>
                        <p className="director-text pt-3 about-text">
                        Harikrishnan S, a registered professional advocate, is associated with the Bar Council of Tamil Nadu & Puducherry. 
                            As an Education Institute Advisor, he provides expert guidance on curriculum development, academic policies, and institutional growth strategies. 
                            He plays a vital role in enhancing educational standards, improving faculty training, and optimizing student outcomes, 
                            ultimately helping institutions foster better learning experiences and achieve long-term success.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* Advisor 2: Dhamothiran */}
            <Container className="py-5">
                <Row className="align-items-center">
                    <Col lg={6} md={12} className="text-center mb-4 mb-md-0 order-md-1 order-lg-2" data-aos="fade-left">
                        <Image
                            src={`${process.env.PUBLIC_URL}/img/advisor2.jpeg`}
                            alt="Dhamothiran T"
                            className="director-image"
                            fluid
                        />
                    </Col>
                    <Col lg={6} md={12} className="order-md-2 order-lg-1" data-aos="fade-right">
                        <h5 className="director-title text-md-center text-lg-end pt-md-3">
                            <strong>Dhamothiran T</strong>
                        </h5>
                        <p className="director-text pt-3 about-text">
                        Dhamothiran T, a registered professional advocate with the Bar Council of Tamil Nadu & Puducherry, serves as an Education Institute Advisor. He specializes in providing strategic guidance on curriculum development, academic policies, and institutional growth. His expertise contributes to elevating educational standards, enhancing faculty training, and optimizing student success. Through his insights, institutions can create enriched learning environments and achieve sustainable growth.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Advisor;
