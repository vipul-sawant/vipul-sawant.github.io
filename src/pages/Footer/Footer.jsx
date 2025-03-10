import { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
    const checkHeight = () => {
      const contentHeight = document.getElementById('root').scrollHeight; // Total content height
      const viewportHeight = window.innerHeight; // Viewport height

      console.log(contentHeight, viewportHeight);

      // If content is smaller than viewport, make footer sticky
      setIsSticky(contentHeight <= viewportHeight);
    };

    console.log("isSticky :", isSticky);
    checkHeight(); // Run on mount
    window.addEventListener("resize", checkHeight); // Run on resize

    return () => window.removeEventListener("resize", checkHeight);
  }, [isSticky, navigate]);
  return (
    <footer  className={`footer ${isSticky ? "sticky-footer" : ""}`}>
      <Container>
        <Row className="text-center">
          <Col md={6}>
            <p className="footer-text">© 2024 Vipul Sawant. All Rights Reserved.</p>
          </Col>
          <Col md={6}>
            <div className="footer-icons">
              <a href="https://github.com/vipul-sawant" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="footer-icon" />
              </a>
              <a href="https://www.linkedin.com/in/vipulsawant2799" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
              </a>
              <a href="mailto:vipssawant842@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
