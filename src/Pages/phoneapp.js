import React, { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Import arrow icon
import "../App.css"; // Add styles if needed
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Phoneapp = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="phoneapp-section-bg">
            <h2 className="about-title pb-4 text-center" data-aos="zoom-in">
                Learn English with Our AI Trainer
            </h2>
            <Container>
                <Row className="align-items-center">
                    {/* On md screens: Image first, Text second */}
                    <Col lg={6} md={12} className="text-center mb-4 mb-md-0 order-md-1 order-lg-2" data-aos="fade-left" data-aos-duration="1500">
                        <Image
                            src={`${process.env.PUBLIC_URL}/img/phoneapp.png`}
                            alt="phone"
                            className="phone-image"
                            fluid
                        />
                    </Col>

                    {/* On md screens: Text second, On lg screens: Text first */}
                    <Col lg={6} md={12} className="order-md-2 order-lg-1" data-aos="fade-right" data-aos-duration="1500">
                        <p className="pt-3 about-text ceo-text">
                            Improve your English language skills with our innovative app, powered by AI technology. Our interactive platform is designed to help you learn English at your own pace, anytime, anywhere.
                        </p>
                        <ul className="feature-list">
                            <li>
                                <FontAwesomeIcon icon={faArrowRight} className="icon" /> 
                                Get instant feedback on your pronunciation, grammar, and vocabulary
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faArrowRight} className="icon" /> 
                                Practice conversations with our AI-powered chatbot
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faArrowRight} className="icon" /> 
                                Receive personalized recommendations for improvement
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Phoneapp;
