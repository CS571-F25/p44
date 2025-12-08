import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { usePlayerStore } from "../store/PlayerStore";

export default function Enemy({ position = [0, 0, 0], speed = 3 }) {
  const ref = useRef();
  const [collidingWithPlayer, setCollidingWithPlayer] = useState(false);
  const seed = useRef(Math.random() * 10000);

  useFrame(() => {
    const enemy = ref.current;
    
    if (!enemy) return;

    const playerPos = usePlayerStore.getState().position;
    const ePos = enemy.translation();

    const dx = playerPos.x - ePos.x;
    const dy = playerPos.y + 2 - ePos.y;
    const dz = playerPos.z - ePos.z;

    const len = Math.hypot(dx, dy, dz);
    if (len < 0.001) return;

    enemy.setLinvel(
      { x: (dx / len) * speed, y: (dy / len) * speed, z: (dz / len) * speed },
      true
    );

    if (collidingWithPlayer) {
      console.log("player hit — still colliding");
    }
  });

  return (
    <RigidBody
      ref={ref}
      position={position}
      colliders="ball"
      name="enemy"
      ccd={true}
      onCollisionEnter={({ other }) => {
        if (other.rigidBodyObject?.name === "player") {
          setCollidingWithPlayer(true);
        }
      }}

      onCollisionExit={({ other }) => {
        if (other.rigidBodyObject?.name === "player") {
          setCollidingWithPlayer(false);
        }
      }}
    >
      <mesh>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </RigidBody>
  );
}
