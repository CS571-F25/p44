import { Canvas } from "@react-three/fiber";
import { OrbitControls, PointerLockControls, Sky, Stars, Stats, Billboard } from "@react-three/drei";
import World from "../game/components/World";
import { Text } from "@react-three/drei";

export default function GameScreen() {
  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Canvas
      
        onPointerDown={(e) => {
        // Request pointer lock on the canvas element
        (e.target).requestPointerLock();
        }}
      
      >
        <Sky
        distance={450000}
        sunPosition={[1, 1, 0]}
        inclination={0}
        azimuth={0.25}
        />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Stats showPanel={0} className="stats"/>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 10, 5]} castShadow />
        <World />
      </Canvas>
    </div>
  );
}
