import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../App.css';

export default function Footer() {
    return (
        <div>
            <footer className="footer-section py-4" id="contact">
                <Container>
                    <Row className="gap-4 gap-md-0 justify-content-center">
                        {/* Logo Section */}
                        <Col md={3} sm={12} className="text-start text-white d-flex flex-column justify-content-between mb-4 mb-md-0">
                            <div className="logo-circle">
                                <img
                                    src={`${process.env.PUBLIC_URL}/img/logo.png`}
                                    alt="Logo"
                                    className="footer-logo"
                                />
                            </div>
                            <p className="mt-3 text-justify">
                            LEARNENG EDUCATION – Empowering schools in Tamil Nadu & Puducherry, MSME-registered & ISO 9001:2015 certified for excellence in language education.
                            </p>
                        </Col>

                        {/* Useful Links Section */}
                        <Col md={3} sm={12} className="text-lg-center text-start text-white mb-4 mb-md-0">
                            <h5 className="footer-heading">Useful Links</h5>
                            <ul className="list-unstyled d-flex flex-column gap-3 text-lg-center text-start">
                                <li>
                                    <Link to="/" className="text-white text-decoration-none">Home</Link>
                                </li>
                                <li>
                                    <Link to="/service" className="text-white text-decoration-none">Service</Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="text-white text-decoration-none">Contact</Link>
                                </li>
                            </ul>
                        </Col>

                        {/* Contact Us Section */}
                        <Col md={3} sm={12} className="text-start text-white mb-4 mb-md-0">
                            <h5 className="footer-heading">Contact Us</h5>
                            <p className="d-flex align-items-center justify-text">
                                <FaPhone className="me-2 calls flex-shrink-0" />
                                <a href="tel:+918870173384" className="text-white ps-1 text-decoration-none">
                                    +91 8870173384
                                </a>
                            </p>
                            <p className="d-flex align-items-center justify-text">
                                <FaEnvelope className="me-2 flex-shrink-0" />
                                <a href="mailto:learnengedupvt@gmail.com" className="text-white ps-2 text-decoration-none">
                                    learnengedupvt@gmail.com
                                </a>
                            </p>
                            <p className="d-flex align-items-start justify-text">
                                <FaMapMarkerAlt className="me-2 flex-shrink-0 mt-1" />
                                <span className="ps-2">
                                    10, Nethaji co-operative nagar, old vandipalayam, Cuddalore-607004
                                </span>
                            </p>
                        </Col>

                        {/* Follow Us Section */}
                        <Col md={3} sm={12} className="text-start text-white mb-4 mb-md-0">
                            <h5 className="footer-heading">Follow Us</h5>
                            <div className="social-icons d-flex justify-content-start gap-3">
                                <a href="https://www.instagram.com/learneng_education/?utm_source=qr&igsh=MWpxZGY0ZmF0ZGlqcw%3D%3D#"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/img/instagram.png`}
                                        alt="Instagram"
                                        width="30"
                                        height="30"
                                    />
                                </a>
                                <a href="https://wa.me/918870173384"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/img/whatsapp (1).png`}
                                        alt="whatsapp"
                                        width="30"
                                        height="30"
                                    />
                                </a>
                            </div>
                        </Col>
                    </Row>

                    <hr />
                    <Row className="mt-4 justify-content-center">
                        <Col className="text-center text-white">
                            <p className="mb-0 footer-bottom">
                                &copy; {new Date().getFullYear()}
                                <a href="https://bmtechx.in" target="_blank" rel="noreferrer"
                                    className="text-white text-decoration-none ms-1">
                                    BMTECHx
                                </a>. All Rights Reserved.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}
