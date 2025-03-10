import React from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import "./Education.css"; // Import custom styles

import bscImage from "../../assets/bscit.svg"; // Ensure these images exist
// import hscImage from "../../assets/hsc.jpg";
// import sscImage from "../../assets/ssc.jpg";

const Education = () => {
  return (
    <Container className="education-section">
      <h2 className="education-title text-center">Education</h2>

      <Card className="education-card">
        <Card.Body>
          <Row className="align-items-center">
            <Col md={3} className="text-center">
              <Image src={bscImage} className="education-image" rounded />
            </Col>
            <Col md={9} className="text-center">
              <h5 className="degree">BScIT - Mumbai University</h5>
              <p className="duration">2017 – 2020</p>
              <p className="details">CGPI: 6.88</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="education-card">
        <Card.Body>
          <Row className="align-items-center">
            <Col md={3} className="text-center">
              <Image src={bscImage} className="education-image" rounded />
            </Col>
            <Col md={9} className="text-center">
              <h5 className="degree">HSC - Maharashtra State Board</h5>
              <p className="duration">2015 – 2017</p>
              <p className="details">Stream: Science | Percentage: 59.23%</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="education-card">
        <Card.Body>
          <Row className="align-items-center">
            <Col md={3} className="text-center">
              <Image src={bscImage} className="education-image" rounded />
            </Col>
            <Col md={9} className="text-center">
              <h5 className="degree">SSC - Maharashtra State Board</h5>
              <p className="duration">2002 – 2015</p>
              <p className="details">Percentage: 77.2%</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Education;
