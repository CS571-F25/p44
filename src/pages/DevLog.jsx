import { Container, Accordion } from "react-bootstrap";
import DevLogEntry from "../components/DevLogEntry";

export default function DevLog() {
  return (
    <Container
      as="section"
      className="page-panel"
      aria-labelledby="devlog-heading"
    >
      <h1 id="devlog-heading" className="mb-4 text-center">
        Development Log
      </h1>

      <p className="text-center mb-4">
        This log tracks how XZSO changed over the semester. Each week entry
        summarizes the main tasks we focused on for the web game and the site.
      </p>

      <Accordion alwaysOpen>
        <DevLogEntry
          eventKey="0"
          title="Week 1 - Project setup and first scene"
        >
          <p>
            Set up the initial React and Vite project structure and created the
            first 3D scene. Added a ground plane, basic lighting, and imported a
            placeholder character model using Three.js and React Three Fiber.
          </p>
        </DevLogEntry>

        <DevLogEntry
          eventKey="1"
          title="Week 2 - Movement and camera controls"
        >
          <p>
            Implemented character movement and camera controls. Adjusted movement
            speeds and mouse sensitivity, and tested different camera heights to
            find a comfortable third person view for exploring the desert map.
          </p>
        </DevLogEntry>

        <DevLogEntry
          eventKey="2"
          title="Week 3 - Navigation, pages, and deployment prep"
        >
          <p>
            Added routing and created the Home, Game, Dev Log, About Us, and
            Feedback pages. Implemented the top navigation bar, connected the
            Play Game button to the game view, and prepared the site structure
            for deployment on GitHub Pages.
          </p>
        </DevLogEntry>

        <DevLogEntry
          eventKey="3"
          title="Week 4 - UI polish and background art"
        >
          <p>
            Styled the site to match the desert wizard artwork. Introduced the
            dark blue background gradient, card style panels, and updated
            typography so the UI feels more like a game landing page instead of
            a plain demo.
          </p>
        </DevLogEntry>

        <DevLogEntry
          eventKey="4"
          title="Week 5 - Music, feedback form, and components"
        >
          <p>
            Added the music toggle in the navbar so background music can be
            turned on and off without restarting. Built the Feedback page with
            labeled form fields and keyboard friendly controls. Broke parts of
            the UI into reusable components such as FeatureCard, DevLogEntry,
            and MainNav to reach the component requirement.
          </p>
        </DevLogEntry>

        <DevLogEntry
          eventKey="5"
          title="Week 6 - Accessibility checks and final polish"
        >
          <p>
            Reviewed color contrast and heading order to keep the site close to
            WCAG AA. Improved focus outlines, and checked that forms can be
            completed by keyboard. Did final wording passes on the Home, About Us,
            and Dev Log pages and tested the live build hosted on GitHub Pages.
            Changed the in-game map to forest, and added profile pictures in the
            About Us page.
          </p>
        </DevLogEntry>
      </Accordion>
    </Container>
  );
}
