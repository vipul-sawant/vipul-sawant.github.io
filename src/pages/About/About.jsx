import { useEffect } from "react";
import { Row, Col, Image, Container, Card } from "react-bootstrap";
import "./About.css";

import codingImage from "../../assets/coding_1.jpg";
import teamworkImage from "../../assets/coding_2.jpg";
import learningImage from "../../assets/coding_3.jpg";

const About = () => {

  useEffect(() => {
    const fadeInElements = document.querySelectorAll(".fade-in");
  
    const fadeInOnScroll = () => {
      fadeInElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          el.classList.add("active");
        }
      });
    };
  
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Initial check
    return () => window.removeEventListener("scroll", fadeInOnScroll);
  }, []);

  return (
    <Container fluid className="about-section">
      <h2 className="text-accent fw-bold text-center mb-4">About Me</h2>

      {/* Who Am I Section */}
      <Row className="justify-content-center mb-4">
        <Col xs={12} md={10}>
          <Card className="about-card fade-in">
            <Row className="align-items-center">
              <Col xs={12} md={6}>
                <Card.Body>
                  <h3 className="about-title">Who Am I?</h3>
                  <p className="about-text">
                  I am <strong> Vipul Sawant </strong>, an aspiring MERN Stack Web Developer passionate about creating user-friendly and high-performing web applications. With a strong foundation in <strong> React.js, Node.js, Express.js, and MongoDB </strong>, I focus on building scalable and responsive solutions. As a fresher, I am eager to apply my skills to real-world projects and continuously enhance my expertise in modern web development.
                  </p>
                </Card.Body>
              </Col>
              <Col xs={12} md={6} className="text-center">
                <Image src={codingImage} className="about-image" />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {/* Collaboration Section */}
      <Row className="justify-content-center mb-4">
        <Col xs={12} md={10}>
          <Card className="about-card fade-in">
            <Row className="align-items-center">
              <Col xs={12} md={6} className="order-md-2">
                <Card.Body>
                  <h3 className="about-title">Collaboration & Growth</h3>
                  <p className="about-text">
                  I am eager to <strong>work in team environments</strong>, learn from others, and contribute to projects through problem-solving and idea-sharing. I am committed to improving my skills and growing as a <strong>web developer</strong> by actively engaging in real-world projects and collaborative experiences.
                  </p>
                </Card.Body>
              </Col>
              <Col xs={12} md={6} className="order-md-1 text-center">
                <Image src={teamworkImage} className="about-image" />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {/* Learning Section */}
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <Card className="about-card fade-in">
            <Row className="align-items-center">
              <Col xs={12} md={6}>
                <Card.Body>
                  <h3 className="about-title">Always Learning</h3>
                  <p className="about-text">
                  I am passionate about <strong>learning and exploring new technologies</strong>, keeping up with the latest trends in web development. I enjoy <strong>experimenting with new tools and frameworks</strong> to refine my skills and build more efficient, modern applications.
                  </p>
                </Card.Body>
              </Col>
              <Col xs={12} md={6} className="text-center">
                <Image src={learningImage} className="about-image" />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
