import React, { useEffect } from "react";
import Slider from "react-slick";
import { Container, Card } from "react-bootstrap";
import { FaGraduationCap, FaChalkboardTeacher, FaBookReader, FaMedal } from "react-icons/fa"; // Import icons
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import SchoolProgramsAccordion from "./F&q";
import Gallery from "./gallery";

const data = [
  {
    id: 1,
    title: "Diploma In Communicative English",
    icon: <FaGraduationCap className="course-section-icon-style" />,
    points: [
      "We send Trainer to the school/college/corporate",
      "Minimum 450 students",
      "9/10 Months Course",
      "Monthly Events, Reports, Visits",
      "Colourful events for the students to improve their Communication Skills",
      "Public Speaking Skills and so on",
    ],
  },
  {
    id: 2,
    title: "Basic Level",
    icon: <FaChalkboardTeacher className="course-section-icon-style" />,
    points: [
      "3 months course (4 months validity)",
      "You can attend (OFFLINE/ONLINE) and from anywhere in the world",
      "2 personal trainers",
      "24 hours personal trainer's availability",
      "Life time assistance",
      "No qualification barrier",
    ],
  },
  {
    id: 3,
    title: "Intermediate Level",
    icon: <FaBookReader className="course-section-icon-style" />,
    points: [
      "45 days course (3 months validity)",
      "Personal trainers are assigned for all the students",
      "Trainer's availability: From Monday to Saturday. Timings: 8:00am to 09:00pm",
      "Life time assistance",
      "No qualification barrier",
    ],
  },
  {
    id: 4,
    title: "Advanced Level",
    icon: <FaMedal className="course-section-icon-style" />,
    points: [
      "45 Days course (2 months validity)",
      "You can attend at anytime and from anywhere in the world",
      "3 personal trainers",
      "24 hours personal trainer's availability",
      "Grammar + speaking training",
    ],
  },
];

const CourseCards = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="coursecard-section" style={{ background: "linear-gradient(to bottom,rgba(239, 243, 234, 0.18),#CDE8E5,rgba(239, 243, 234, 0.38))" }}>
      <h2 className="about-title pt-5 pb-4 text-center" data-aos="zoom-in" data-aos-duration="1500">
        Our Courses
      </h2>
      <Container>
        <Slider {...settings}>
          {data.map((course) => (
            <div key={course.id} data-aos="fade-up" data-aos-duration="1500">
              <Card
                className="custom-card mx-2"
                style={{
                  height: '380px',  // Updated height
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Card.Body>
                  <Card.Title className="custom-title text-center pb-4">
                    {course.icon} {course.title}
                  </Card.Title>
                  <ul className="custom-list">
                    {course.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
      <div>
        <SchoolProgramsAccordion />
      </div>
      <div>
        <Gallery />
      </div>
    </div>
  );
};

export default CourseCards;
