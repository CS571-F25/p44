import { Container, Row, Col, ListGroup } from "react-bootstrap";
import ProfileCard from "../components/ProfileCard";

// Import images
import SunPfp from "../assets/images/Profile_Sun.jpg";
import XiaoPfp from "../assets/images/Profile_Xiao.png";

export default function AboutUs() {
  return (
    <Container
      as="section"
      className="page-panel"
      aria-labelledby="about-heading"
    >
      <h1 id="about-heading" className="mb-4 text-center">
        About Us
      </h1>

      <Row className="g-4 justify-content-center mb-5">
        <Col md={4} className="d-flex justify-content-center">
          <ProfileCard
            name="Xiao"
            role="Gameplay & 3D Systems"
            imgSrc={XiaoPfp}
            alt="Profile picture of Xiao"
          />
        </Col>
        <Col md={4} className="d-flex justify-content-center">
          <ProfileCard
            name="Sun"
            role="UI/UX & Web Development"
            imgSrc={SunPfp}
            alt="Profile picture of Sun"
          />
        </Col>
      </Row>

      <Row className="g-4">
        {/* Team story */}
        <Col md={7}>
          <h2 className="h4 mb-3">Our team</h2>
          <p>
            We are a small team working on a simple 3D web game for our CS571
            project. Our team members are Xiao and Sun.
          </p>
          <p>
            Xiao handles all the important game components, including movement,
            environment, and gameplay systems. Sun focuses on UI polish, front-end
            structure, and making the site visually appealing and easy to use.
          </p>
          <p>
            Our goal is to create a small but polished web game that runs
            smoothly in the browser, inspired by games like Vampire Survivors
            and Megabonk.
          </p>
        </Col>

        {/* Technology / stack */}
        <Col md={5}>
          <h2 className="h4 mb-3">Technology</h2>
          <p className="mb-2">
            XZSO is built using modern web tools:
          </p>
          <ListGroup variant="flush">
            <ListGroup.Item className="bg-transparent text-light border-secondary">
              React for the overall UI and routing.
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent text-light border-secondary">
              Three.js for 3D rendering in the browser.
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent text-light border-secondary">
              React Three Fiber as the React renderer for Three.js scenes.
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent text-light border-secondary">
              React Bootstrap for consistent layout and components.
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent text-light border-secondary">
              Vite for fast development and easy builds.
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
