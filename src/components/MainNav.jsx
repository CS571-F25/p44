import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import MusicToggle from "./MusicToggle";

export default function MainNav({ isMusicOn, onToggleMusic }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={NavLink} to="/" aria-label="XZSO home page">
          XZSO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/game">
              Game
            </Nav.Link>
            <Nav.Link as={NavLink} to="/devlog">
              Dev Log
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link as={NavLink} to="/feedback">
              Feedback
            </Nav.Link>
          </Nav>

          {/* Small music toggle button */}
          <MusicToggle isOn={isMusicOn} onToggle={onToggleMusic} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
