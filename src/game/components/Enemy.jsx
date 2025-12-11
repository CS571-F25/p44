// Enemy.js
import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { usePlayerStore } from "../store/PlayerStore";

export default function Enemy({ position = [0, 0, 0], speed = 3 }) {
  const ref = useRef();
  const [dead, setDead] = useState(false);

  // Kill the enemy
  function killEnemy() {
    if (dead || !ref.current) return; // Prevent double kill
    setDead(true);

    // Disable physics and freeze
    ref.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
    ref.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
    ref.current.setEnabled(false);
  }

  useFrame(() => {
    if (dead) return;

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
  });

  return (
    <RigidBody
      ref={ref}
      position={position}
      colliders="ball"
      name="enemy"
      ccd={true}
      // 3. FIX: Listen for sensor intersections (The Slash)
      onIntersectionEnter={({ other }) => {
        if (other.rigidBodyObject?.name === "slash") {
          killEnemy();
        }
      }}
      // Handle physical collisions (The Player)
      onCollisionEnter={({ other }) => {
        const otherName = other.rigidBodyObject?.name;
        if (otherName === "slash") { 
            // Just in case slash is changed to non-sensor later
            killEnemy(); 
        }
      }}
    >
      <mesh visible={!dead}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </RigidBody>
  );
}