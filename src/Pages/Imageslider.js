import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
            { breakpoint: 568, settings: { slidesToShow: 1 } },
        ],
    };

    const data = [
        { id: 1, name: "J. Jenny", work: "Team Leader", img: "/img/Jenny.jpg" },
        { id: 2, name: "Buvana Dharshini", work: "English Language Trainer", img: "/img/Buvana.jpeg" },
        { id: 3, name: "A. Mercilin", work: "Academic Co-ordinator", img: "/img/Mercilin.jpg" },
        { id: 4, name: "Sabareesh", work: "English Language Trainer", img: "/img/Sabareesh.jpg" },
    ];

    return (
        <div className="image-slider-section">
            <h2 className="about-title pt-5 pb-4 text-center" data-aos="zoom-in" data-aos-duration="1500">
                Our TL & Trainers
            </h2>
            <div className="slider-wrapper py-5" data-aos="zoom-in" data-aos-duration="1500">
                <div className="container">
                    <Slider {...settings}>
                        {data.map((person) => (
                            <div key={person.id} className="card-container">
                                <div className="card">
                                    <img src={person.img} alt={person.name} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{person.name}</h5>
                                        <p className="card-text">{person.work}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default CardSlider;
