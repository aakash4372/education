import React, { useEffect } from "react";
import "../App.css"; // Import CSS
import AboutSection from "./About";
import Mission from "./Mission";
import Recognitions from "./Recognitions";
import Speaker from "./Speaker";
import Ceo from "./Ceo";
import ImageSlider from "./Imageslider";
import "aos/dist/aos.css"; // Import AOS CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Carousel } from "react-bootstrap";
import AOS from "aos";
import Advisor from "./Advisor";
import CourseSlider from "./Homecard";

const HomeSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      {/* Carousel Section */}
      <div className="carousel-container">
        <Carousel
          indicators={false}
          interval={4000}
          nextIcon={null} // Removes the right (next) button
          prevIcon={null} // Removes the left (prev) button
          pause={false}
        >
          {/* Slide 1 */}
          <Carousel.Item>
            <img className="d-block w-100 carousel-image" src={`${process.env.PUBLIC_URL}/child/1.jpg`} alt="First slide" />
            <Carousel.Caption>
              <h3>Empowering Minds, Transforming Futures.</h3>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Slide 2 */}
          <Carousel.Item>
            <img className="d-block w-100 carousel-image" src={`${process.env.PUBLIC_URL}/child/h.JPG`} alt="Second slide" />
            <Carousel.Caption>
              <h3>Learn Today, Lead Tomorrow</h3>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Slide 3 */}
          <Carousel.Item>
            <img className="d-block w-100 carousel-image" src={`${process.env.PUBLIC_URL}/child/g.jpg`} alt="Third slide" />
            <Carousel.Caption>
              <h3>Unlock Your Potential with Quality Education</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>


      {/* Other Sections */}
      <AboutSection />
      <CourseSlider />
      <Mission />
      <Recognitions />
      <Speaker />
      <Ceo />
      <Advisor />
      <ImageSlider />
    </div>
  );
};



export default HomeSection;
