import { Card } from "react-bootstrap";

export default function ProfileCard({ name, role, imgSrc, alt }) {
  return (
    <Card
      className="bg-transparent text-light border-secondary profile-card"
      style={{ width: "100%", maxWidth: "260px" }}
    >
      <Card.Img
        variant="top"
        src={imgSrc}
        alt={alt}
        className="profile-img"
      />
      <Card.Body>
        <Card.Title className="text-center fs-5">{name}</Card.Title>
        <Card.Text className="text-center text-muted">{role}</Card.Text>
      </Card.Body>
    </Card>
  );
}
