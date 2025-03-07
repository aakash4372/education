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
            <h2 className="about-title pt-5 pb-4 text-center" data-aos="zoom-in" data-aos-duration="1500">
            Meet our Director's
            </h2>
            <Container className="py-5">
                <Row className="align-items-center">
                    {/* Left: Image Section */}
                    <Col lg={6} className="text-center mb-4 mb-md-0" data-aos="fade-right" data-aos-duration="1500">
                        <Image
                            src={`${process.env.PUBLIC_URL}/img/Taittan2.jpg`}
                            alt="Ezhilarasu Director"
                            className="director-image"
                            fluid
                        />
                    </Col>

                    {/* Right: Text Section */}
                    <Col lg={6} data-aos="fade-left" data-aos-duration="1500">
                        <h5 className="director-title text-md-center text-lg-start pt-md-3">
                            <strong>Ezhilarasu Director</strong>
                        </h5>
                        <p className="director-text pt-3 about-text">
                            Ezhilarasu B, an exemplary leader in the realm of education, stands as a visionary force within Tamil Nadu.
                            Possessing a wealth of experience in language training and curriculum development, Ezhilarasu's dedication
                            to educational excellence is unparalleled. His extensive expertise has been a driving force in shaping
                            our programs for students, reflecting a profound commitment to fostering effective communication.
                            Through strategic leadership and an unwavering passion for the transformative power of education,
                            Ezhilarasu has emerged as an instrumental figure in elevating the standards of learning within our institution.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Speaker;
