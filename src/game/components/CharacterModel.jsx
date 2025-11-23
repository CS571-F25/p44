import { useGLTF } from "@react-three/drei";
import * as THREE from "three"

export default function CharacterModel(props) {
    const { scene } = useGLTF("/p44/assets/models/wizardV_animated2.glb");
    return <primitive object={scene} />;
}

