import { Container } from "react-bootstrap";

export default function AboutUs() {
  return (
    <Container className="page-panel text-center">
      <h1>About Us</h1>
      <div style={{ maxWidth: "42rem", margin: "0 auto", textAlign: "left" }}>
        <p>
          We are a small team working on a simple 3D web game for our CS571 project.
          Our team members are Xiao and Sun.
        </p>
        <p>
          Xiao is carrying this project by making all the important components of the game.
          Sun focuses on the UI, trying to make a page that is worth looking at.
        </p>
        <p>
          Our goal is to create a small but polished web game that runs smoothly in the browser.
          It was inspired by Vampire Survivors, and MegaBonk.
        </p>
      </div>
    </Container>
  );
}
