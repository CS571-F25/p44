import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router";

export default function MainNav() {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="mb-3">
      <Container>
        <Navbar.Brand as={NavLink} to="/">XZSO</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/game">Game</Nav.Link>
            <Nav.Link as={NavLink} to="/devlog">Dev Log</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
