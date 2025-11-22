import { useGLTF } from "@react-three/drei";
import * as THREE from "three"

export default function CharacterModel(props) {
    const { scene } = useGLTF("/p44/assets/models/bcat.glb");
    return <primitive object={scene} />;
}

