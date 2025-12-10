import { Container, Row, Col, ListGroup } from "react-bootstrap";

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

      <Row className="g-4">
        {/* Team story */}
        <Col md={7}>
          <h2 className="h4 mb-3">Our team</h2>
          <p>
            We are a small team working on a simple 3D web game for our CS571
            project. Our team members are Xiao and Sun.
          </p>
          <p>
            Xiao is carrying this project by making all the important
            components of the game. Sun focuses on the UI, trying to make a
            page that is worth looking at and easier to use.
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
