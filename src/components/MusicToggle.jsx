import { Button } from "react-bootstrap";

export default function MusicToggle({ isOn, onToggle }) {
  const label = isOn ? "Turn music off" : "Turn music on";

  return (
    <Button
      variant="outline-secondary"
      size="sm"
      className="ms-2"
      onClick={onToggle}
      aria-pressed={isOn}
      aria-label={label}
    >
      {/* Icon only – screen readers use the aria-label above */}
      <span aria-hidden="true">{isOn ? "🔊" : "🔈"}</span>
    </Button>
  );
}
