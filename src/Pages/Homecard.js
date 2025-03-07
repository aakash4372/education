import React, { useEffect } from "react";
import Slider from "react-slick";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

const courses = [
  {
    id: 1,
    title: "Diploma In Communicative English",
    description: "A structured program to improve English fluency, public speaking, and writing skills.",
  },
  {
    id: 2,
    title: "Basic Level",
    description: "Ideal for beginners looking to develop fundamental English communication skills.",
  },
  {
    id: 3,
    title: "Intermediate Level",
    description: "Designed to enhance grammar, vocabulary, and conversational confidence.",
  },
  {
    id: 4,
    title: "Advanced Level",
    description: "Focused on refining fluency, complex grammar, and professional communication.",
  },
];

const CourseSlider = () => {
  useEffect(() => {}, []);

  const navigate = useNavigate(); // Initialize useNavigate

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="homecard-section pb-5">
        <h2 className="about-title text-center" data-aos="zoom-in" data-aos-duration="1500">
        Our Courses
      </h2>
      <Container className="py-5">
        <Slider {...settings}>
          {courses.map((course) => (
            <div key={course.id}>
              <Card className="homecard-section-custom-card mx-2">
                <Card.Body>
                  <Card.Title className="fw-bold">{course.title}</Card.Title>
                  <Card.Text className="text-muted text-truncate">
                    {course.description}
                  </Card.Text>
                  <div className="text-end">
                    <Button
                      variant="link"
                      className="text-decoration-none"
                      onClick={() => navigate("/service")} // Navigate on click
                    >
                      See More →
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default CourseSlider;
