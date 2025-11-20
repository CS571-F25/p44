import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container className="text-center mt-5">
      <h1>Home</h1>
      <p>Welcome to our game!</p>
      <Button onClick={() => navigate("/game")}>Play Game</Button>
    </Container>
  );
}
