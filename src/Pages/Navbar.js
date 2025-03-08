import React, { useState } from "react";
import { Navbar, Nav, Offcanvas, Container, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaImages, FaPhone } from "react-icons/fa";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { motion } from "framer-motion";

const MyOffcanvas = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="navbar-section-bar">
      <Navbar expand="lg" className="shadow py-2 main-navbar fixed-top">
        <Container className="d-flex align-items-center justify-content-between">
          <Navbar.Brand as={Link} to="/" className="fw-bold navbar-brand">
            <img src={`${process.env.PUBLIC_URL}/img/logo2.png`} alt="logo" height="80" />
            <div className="navbar-text text-center pt-3">
              <p className="mb-0">LEARNENG EDUCATION</p>
              <span className="mb-0 two-span">"The Shine of Communicative English"</span>
              <span className="mb-0 three-span">Regd: Under Ministry of MSME, Government of India.</span>
            </div>
          </Navbar.Brand>

          {/* Desktop Navigation */}
          <Nav className="ms-auto d-none gap-4 d-lg-flex align-items-center">
            <NavLink to="/" className={({ isActive }) => `nav-link mx-2 ${isActive ? "active-link" : ""}`}>Home</NavLink>
            <NavLink to="/service" className={({ isActive }) => `nav-link mx-2 ${isActive ? "active-link" : ""}`}>Service</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link mx-2 ${isActive ? "active-link" : ""}`}>Contact</NavLink>

            {/* View Brochure Button (Desktop) */}
            <Button className="brochure-btn d-none d-lg-inline-block btn-sm" href="/img/brochure.pdf" download>
              View Brochure
            </Button>
          </Nav>

          {/* Offcanvas Toggle Button (Mobile) */}
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9, rotate: -10 }}
            onClick={handleShow}
            className="d-lg-none d-flex align-items-center"
            style={{ cursor: "pointer" }}
          >
            <HiOutlineBars3BottomRight size={30} color="#227ec1" />
          </motion.div>
        </Container>
      </Navbar>

      {/* Offcanvas Menu */}
      <Offcanvas show={show} onHide={handleClose} placement="start" className="custom-offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <NavLink to="/" className={({ isActive }) => `nav-link my-2 d-flex align-items-center ${isActive ? "active-link" : ""}`} onClick={handleClose}>
              <FaHome className="me-2" /> Home
            </NavLink>
            <NavLink to="/service" className={({ isActive }) => `nav-link my-2 d-flex align-items-center ${isActive ? "active-link" : ""}`} onClick={handleClose}>
              <FaImages className="me-2" /> Service
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link my-2 d-flex align-items-center ${isActive ? "active-link" : ""}`} onClick={handleClose}>
              <FaPhone className="me-2" /> Contact
            </NavLink>

            {/* View Brochure Button (Inside Offcanvas) */}
            <Button className="brochure-btn w-100 mt-3 d-lg-none" href="/img/brochure.pdf" download>
              View Brochure
            </Button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default MyOffcanvas;
