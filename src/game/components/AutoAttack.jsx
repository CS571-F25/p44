// AutoAttack.js
import { useEffect, useState } from "react";
import * as THREE from "three";
import Slash from "./Slash";
import { usePlayerStore } from "../store/PlayerStore";
import { usePlayerRotationStore } from "../store/PlayerRotationStore";

export default function AutoAttack({ interval = 1000 }) {
  const [play, setPlay] = useState(false);
  const [slashPosition, setSlashPosition] = useState([0, 0, 0]);
  const [slashRotation, setSlashRotation] = useState(0);
  
  const playerPosition = usePlayerStore((state) => state.position);
  const playerRotation = usePlayerRotationStore((state) => state.rotation);

  // Trigger a replay every interval
  useEffect(() => {
    const id = setInterval(() => {
      if (!playerPosition || !playerRotation) return;

      // Use position from store
      const pos = playerPosition.clone();
      
      // Extract Y rotation from quaternion
      const euler = new THREE.Euler().setFromQuaternion(playerRotation);
      const yRotation = euler.y;

      // Calculate forward position
      const forward = new THREE.Vector3(0, 0, 1)
        .applyQuaternion(playerRotation)
        .setY(0)
        .normalize();

      pos.add(forward.multiplyScalar(9));
      pos.y += 2;

      // Update state with new values
      setSlashPosition(pos.toArray());
      setSlashRotation(yRotation);

      // Restart animation
      setPlay(false);
      setTimeout(() => setPlay(true), 0);

    }, interval);

    return () => clearInterval(id);
  }, [interval, playerPosition, playerRotation]);

  if (!play) return null;

  return (
    <group 
      position={slashPosition} 
      rotation={[0, slashRotation, 0]}
    >
      <Slash
        url="/p44/assets/animation/s4.png"
        rows={2}
        cols={5}
        totalFrames={7}
        fps={16}
        scale={15}
        onFinish={() => setPlay(false)}
      />
    </group>
  );
}