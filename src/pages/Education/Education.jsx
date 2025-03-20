import React from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import "./Education.css"; // Import custom styles

// import bscImage from "../../assets/bscit.svg"; // Ensure these images exist
import MSBSHSEImage from "../../assets/MSBSHSE_logo.png";
import uomImage from "../../assets/uom_logo.png";
// import sscImage from "../../assets/ssc.jpg";
const educationData = [
  {
    degree: "BScIT - Mumbai University",
    duration: "2019 – 2020",
    details: "CGPI: 6.88",
    // image: bscImage,
    image: uomImage,
  },
  {
    degree: "HSC - Maharashtra State Board",
    duration: "2016 – 2017",
    details: "Stream: Science | Percentage: 59.23%",
    image: MSBSHSEImage,
  },
  {
    degree: "SSC - Maharashtra State Board",
    duration: "2014 – 2015",
    details: "Percentage: 77.2%",
    image: MSBSHSEImage,
  },
];


const Education = () => {
  return (
    <Container className="education-section">
    <h2 className="education-title text-center">Education</h2>
    <div className="timeline">
      {educationData.map((edu, index) => (
        <div className="timeline-item" key={index}>
          <div className={`timeline-content ${index % 2 === 0 ? "left" : "right"}`}>
            <Image src={edu.image} className="education-image" rounded />
            <h5 className="degree">{edu.degree}</h5>
            <p className="duration">{edu.duration}</p>
            <p className="details">{edu.details}</p>
          </div>
        </div>
      ))}
    </div>
  </Container>
  );
};

export default Education;
