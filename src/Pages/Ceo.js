import React, { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../App.css"; // Add styles if needed
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Speaker = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="speaker-section-bg">
            <Container className="">
                <Row className="align-items-center">
                    {/* On md screens: Image first, Text second */}
                    <Col lg={6} md={12} className="text-center mb-4 mb-md-0 order-md-1 order-lg-2" data-aos="fade-left" data-aos-duration="1500">
                        <Image
                            src={`${process.env.PUBLIC_URL}/img/Haridoss.jpg`}
                            alt="Haridoss Director"
                            className="director-image"
                            fluid
                        />
                    </Col>

                    {/* On md screens: Text second, On lg screens: Text first */}
                    <Col lg={6} md={12} className="order-md-2 order-lg-1" data-aos="fade-right" data-aos-duration="1500">
                        <h5 className="director-title text-md-center text-lg-end pt-md-3">
                            <strong>Haridoss Director</strong>
                        </h5>
                        <p className="director-text pt-3 about-text ceo-text">
                            Haridoss is a visionary force in Tamil Nadu and an excellent leader in the field of education. He has extensive experience in curriculum creation and language instruction, and his commitment to quality education is unmatched. His vast experience has been instrumental in establishing our student programs, demonstrating a deep dedication to promoting clear communication. Haridoss has been a key player in raising the bar for learning at our school thanks to his strategic leadership and unwavering enthusiasm for the transformational potential of education.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Speaker;
