import { Card } from "react-bootstrap";

export default function FeatureCard({ title, children }) {
  return (
    <Card className="feature-card">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{children}</Card.Text>
      </Card.Body>
    </Card>
  );
}
