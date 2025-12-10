import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import FeatureCard from "../components/FeatureCard";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container className="page-panel">
      {/* Hero section */}
      <section
        className="hero-section"
        aria-labelledby="home-heading"
      >
        <Row className="align-items-center g-4">
          {/* Left side - main pitch */}
          <Col md={7} className="text-center text-md-start">
            <h1
              id="home-heading"
              className="hero-title"
            >
              XZSO
            </h1>
            <p className="hero-tagline">
              A small browser based survival game inspired by Vampire Survivors
              and Megabonk. Wander an endless forest, fight enemies, and see how
              long you can last.
            </p>
            <Button
              variant="primary"
              size="lg"
              className="mt-3"
              onClick={() => navigate("/game")}
            >
              Play Game
            </Button>
            <p className="hero-subtext">
              Use your keyboard and mouse to move and look around. The game
              runs directly in your browser, so there is nothing to install.
            </p>
          </Col>

          {/* Right side - game info card */}
          <Col md={5}>
            <aside
              className="hero-meta-card"
              aria-label="XZSO game information"
            >
              <h2 className="hero-meta-heading">Game overview</h2>
              <div className="hero-meta-row">
                <span className="hero-meta-label">Genre</span>
                <span className="hero-meta-value">Survival / Action</span>
              </div>
              <div className="hero-meta-row">
                <span className="hero-meta-label">Platform</span>
                <span className="hero-meta-value">Web browser</span>
              </div>
              <div className="hero-meta-row">
                <span className="hero-meta-label">Camera</span>
                <span className="hero-meta-value">Third person</span>
              </div>
              <div className="hero-meta-row">
                <span className="hero-meta-label">Project</span>
                <span className="hero-meta-value">CS571 Web Project</span>
              </div>
            </aside>
          </Col>
        </Row>
      </section>

      {/* Feature cards - key points */}
      <section
        className="feature-row"
        aria-label="Game features"
      >
        <Row className="g-4">
          <Col md={4}>
            <FeatureCard title="Endless forest">
              Explore a wide open map that does not end. Survive longer as the
              difficulty slowly increases over time.
            </FeatureCard>
          </Col>
          <Col md={4}>
            <FeatureCard title="Simple controls">
              Move with your keyboard and look around with your mouse. The game
              is designed to be easy to pick up and play.
            </FeatureCard>
          </Col>
          <Col md={4}>
            <FeatureCard title="In browser 3D">
              Runs directly in your browserr, so there is nothing to install or
              download before you start playing.
            </FeatureCard>
          </Col>
        </Row>
      </section>

      {/* Link to feedback page */}
      <section className="text-center">
        <h2 className="feedback-heading">
          Want to give us feedback?
        </h2>
        <p>
          Help us improve XZSO by sharing your thoughts on a short feedback
          page.
        </p>
        <Button
          variant="outline-light"
          onClick={() => navigate("/feedback")}
        >
          Go to feedback page
        </Button>
      </section>
    </Container>
  );
}
