import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Home.css"; // Import custom styles

const Home = () => {
  return (
    <div className="home-section">
      <Container className="text-center">
        <h1 className="home-title">Welcome to My Portfolio</h1>
        <p className="home-subtitle">
  I am <span className="fw-bold">Vipul Sawant</span>, a highly motivated Web Developer with a strong foundation in front-end and full-stack development. Skilled in modern web technologies, I have built and deployed multiple projects showcasing my expertise in creating responsive, user-friendly applications.
</p>

        <Button variant="custom" size="lg" as={Link} to="/about" className="home-button">
          Learn More About Me
        </Button>
      </Container>
    </div>
  );
};

export default Home;
