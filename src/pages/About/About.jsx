import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./About.css";

import codingImage from "../../assets/coding_1.jpg";  
import teamworkImage from "../../assets/coding_2.jpg";  
import learningImage from "../../assets/coding_3.jpg";  

const About = () => {
  return (
    <Container fluid className="about-section">
      <h2 className="text-accent fw-bold text-center mb-5">About Me</h2>

      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="about-card">
            <Row className="align-items-center">
              <Col md={6}>
                <Card.Body>
                  <h3 className="about-title">Who Am I?</h3>
                  <p className="about-text">
                    Hey there! I'm <strong>Vipul Sawant</strong>, a web developer eager to build user-friendly applications. 
                    I enjoy writing clean code and bringing ideas to life through development.
                  </p>
                </Card.Body>
              </Col>
              <Col md={6}>
                <div className="image-container">
                  <Image src={codingImage} className="about-image" />
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center mt-4">
        <Col md={10}>
          <Card className="about-card">
            <Row className="align-items-center">
              <Col md={6} className="order-md-2">
                <Card.Body>
                  <h3 className="about-title">Collaboration & Growth</h3>
                  <p className="about-text">
                    I enjoy working with teams, discussing ideas, and solving problems together. 
                    I believe learning from others and sharing knowledge makes projects better.
                  </p>
                </Card.Body>
              </Col>
              <Col md={6} className="order-md-1">
                <div className="image-container">
                  <Image src={teamworkImage} className="about-image" />
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center mt-4">
        <Col md={10}>
          <Card className="about-card">
            <Row className="align-items-center">
              <Col md={6}>
                <Card.Body>
                  <h3 className="about-title">Always Learning</h3>
                  <p className="about-text">
                    I am always improving my skills and staying updated with new technologies. 
                    I love exploring new tools and frameworks to enhance my development abilities.
                  </p>
                </Card.Body>
              </Col>
              <Col md={6}>
                <div className="image-container">
                  <Image src={learningImage} className="about-image" />
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
