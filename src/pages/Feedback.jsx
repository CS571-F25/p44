import { Container, Form, Button } from "react-bootstrap";

export default function Feedback() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thanks for your feedback! We really appreciate it.");
  };

  return (
    <Container className="page-panel">
      <section aria-labelledby="feedback-heading">
        <h1 id="feedback-heading">Feedback</h1>
        <p>
          Help us improve XZSO by sharing your thoughts. This demo form keeps
          everything in your browser only, but it shows how we could collect
          early playtest notes.
        </p>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="feedbackName">
            <Form.Label>Your name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Player name"
              aria-describedby="feedbackNameHelp"
            />
            <Form.Text id="feedbackNameHelp">
              Optional. You can leave this blank if you want to stay anonymous.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="feedbackMessage">
            <Form.Label>Feedback</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              required
              aria-required="true"
              placeholder="Tell us what you liked or what we should improve."
            />
          </Form.Group>

          <Button type="submit" variant="primary">
            Submit feedback
          </Button>
        </Form>
      </section>
    </Container>
  );
}
