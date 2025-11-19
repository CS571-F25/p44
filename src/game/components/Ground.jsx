import { RigidBody } from "@react-three/rapier";
import { RepeatWrapping, NearestFilter } from "three";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Ground() {
  const texture = useLoader(TextureLoader, "/p44/assets/textures/Grass_01_basecolor.png"); // Make this procedural later
  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.magFilter = NearestFilter;
  texture.repeat.set(50, 50); // how many times it repeats

  return (
    <RigidBody type="fixed" colliders="trimesh">
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <boxGeometry args={[100, 100]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </RigidBody>
  );
}
