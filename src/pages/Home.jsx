import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import FeatureCard from "../components/FeatureCard";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container className="mt-5 mb-5" style={{ maxWidth: "960px" }}>
      {/* Hero section */}
      <section className="text-center mb-5" aria-labelledby="home-heading">
        <h1 id="home-heading">XZSO</h1>
        <p>
          XZSO is a small browser-based survival game inspired by Vampire
          Survivors and Megabonk. Wander an endless map, fight enemies,
          and see how long you can last.
        </p>
        <Button
          variant="primary"
          size="lg"
          className="mt-3"
          onClick={() => navigate("/game")}
        >
          Play Game
        </Button>
        <p className="mt-3">
          Use your keyboard and mouse to move and look around. The game runs
          directly in your browser, no download required.
        </p>
      </section>

      {/* Screenshot */}
      <section className="mb-5" aria-label="Game screenshot">
        <img
          src="/assets/images/game-screenshot.png"
          alt="In-game view of the XZSO character standing in the desert."
          style={{
            width: "100%",
            borderRadius: "16px",
            boxShadow: "0 16px 40px rgba(0, 0, 0, 0.25)",
          }}
        />
      </section>

      {/* Feature cards – only final-player features */}
      <section className="mb-5" aria-label="Game features">
        <Row className="g-4">
          <Col md={4}>
            <FeatureCard title="Endless map">
              Explore a wide open desert and see how long you can survive
              as the difficulty slowly increases.
            </FeatureCard>
          </Col>
          <Col md={4}>
            <FeatureCard title="Simple controls">
              Move with your keyboard and look around with your mouse.
              The game is designed to be easy to pick up and play.
            </FeatureCard>
          </Col>
          <Col md={4}>
            <FeatureCard title="In-browser 3D">
              Runs directly in your browser using React Three Fiber,
              so there is nothing to install or download.
            </FeatureCard>
          </Col>
        </Row>
      </section>

      {/* Link to feedback page */}
      <section className="text-center">
        <h2 style={{ fontSize: "1.25rem" }}>Want to give us feedback?</h2>
        <p>
          Help us improve XZSO by sharing your thoughts on a short feedback page.
        </p>
        <Button variant="outline-dark" onClick={() => navigate("/feedback")}>
          Go to feedback page
        </Button>
      </section>
    </Container>
  );
}
