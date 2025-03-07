import React, { useState, useEffect } from "react";
import { Button, Row, Col, Pagination } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const media = [
  { id: 1, src: "/child/1.jpg", type: "image", category: "School" },
  { id: 11, src: "/child/11.jpg", type: "image", category: "School" },
  { id: 12, src: "/child/12.jpg", type: "image", category: "School" },
  { id: 13, src: "/child/13.jpg", type: "image", category: "School" },
  { id: 14, src: "/child/14.jpg", type: "image", category: "School" },
  { id: 3, src: "/child/3.mp4", type: "video", category: "Video" },
  { id: 7, src: "/child/7.mp4", type: "video", category: "Video" },
  { id: 5, src: "/child/5.mp4", type: "video", category: "Video" },
  { id: 6, src: "/child/6.mp4", type: "video", category: "Video" },
  { id: 8, src: "/child/8.JPG", type: "image", category: "School" },
  { id: 9, src: "/child/9.jpg", type: "image", category: "School" },
  { id: 10, src: "/child/10.jpg", type: "image", category: "School" },
  { id: 15, src: "/child/15.jpg", type: "image", category: "School" },
];

const itemsPerPage = 6;

const Gallery = () => {
    useEffect(() => {
      AOS.init();
    }, []);
  
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setCurrentPage(1); // Reset pagination when category changes
  };

  const filteredMedia = category === "All" ? media : media.filter((item) => item.category === category);
  const totalPages = Math.ceil(filteredMedia.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedMedia = filteredMedia.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="gallery-section container mt-3">
      <h2 className="about-title pt-5 pb-5 text-center" data-aos="zoom-in" data-aos-duration="1500">
            Our gallery
            </h2>
      {/* Category Filters */}
      <div className="mb-3 text-center">
      <Button
  variant={category === "All" ? "primary" : "outline-primary"}
  onClick={() => handleCategoryChange("All")}
  className="custom-button"
>
  All
</Button>{" "}
<Button
  variant={category === "School" ? "primary" : "outline-primary"}
  onClick={() => handleCategoryChange("School")}
  className="custom-button"
>
  School
</Button>{" "}
<Button
  variant={category === "Video" ? "primary" : "outline-primary"}
  onClick={() => handleCategoryChange("Video")}
  className="custom-button"
>
  Video
</Button>

      </div>

      {/* Media Grid */}
      <Row >
        {displayedMedia.map((item) => (
          <Col key={item.id} md={4} className="mb-3" data-aos="zoom-in" data-aos-duration="1500">
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`Gallery ${item.id}`}
                className="img-fluid rounded shadow"
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedMedia(item.src)}
              />
            ) : (
              <video
                src={item.src}
                className="img-fluid rounded shadow"
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedMedia(item.src)}
              >
                Your browser does not support the video tag.
              </video>
            )}
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination className="justify-content-center mt-3 gap-3">
          <Pagination.Prev onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} />
          {[...Array(totalPages)].map((_, i) => (
            <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => setCurrentPage(i + 1)}>
              {i + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} />
        </Pagination>
      )}

      {/* Full-Screen Media View */}
      {selectedMedia && (
        <div className="fullscreen-overlay" onClick={() => setSelectedMedia(null)}>
          <span className="close-icon">&times;</span>
          {selectedMedia.endsWith(".mp4") ? (
            <video src={selectedMedia} controls autoPlay className="fullscreen-media" />
          ) : (
            <img src={selectedMedia} alt="Full View" className="fullscreen-media" />
          )}
        </div>
      )}
    </div>
  );
};

export default Gallery;
