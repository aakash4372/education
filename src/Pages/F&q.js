import React, { useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SchoolProgramsAccordion = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="about-title pt-5 pb-5 text-center" data-aos="zoom-in" data-aos-duration="1500">
                our Features
            </h2>
            <Accordion defaultActiveKey="0" className="custom-accordion">
                <Accordion.Item eventKey="0" data-aos="fade-right" data-aos-duration="1500">
                    <Accordion.Header>Our School Programs</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            We offer tailor-made language programs designed to meet the unique needs of your school. These programs aim to improve students' English language proficiency, boost their confidence, and enhance their academic performance.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" data-aos="fade-left" data-aos-duration="1500">
                    <Accordion.Header>Empower Your School with LEARNENG</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            LEARNENG EDUCATION, a Ministry of MSME, Government of India-registered and ISO 9001:2015 certified company, invites your school to join us on a transformative language learning journey. We offer a range of programs suitable for students of all levels and ages, ensuring the highest standards in education and quality management. Empower your students with the gift of effective communication.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" data-aos="fade-up" data-aos-duration="1500">
                    <Accordion.Header>Salient Features of LearnEng Education</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Efficient trained trainers from Tamil Nadu and Kerala</li>
                            <li>Attractive classroom activities</li>
                            <li>Innovative campus activities for language enhancement</li>
                            <li>Well-designed monthly events</li>
                            <li>School event planning</li>
                            <li>Certificates and prizes for the best performers</li>
                            <li>Complete language solution under one roof</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div className="brochure-container" data-aos="fade-up" data-aos-duration="1500">
                <Button className="brochure-btn" href="/img/brochure.pdf" download>
                    📄 View Brochure
                </Button>
            </div>
        </div>
    );
};

export default SchoolProgramsAccordion;
