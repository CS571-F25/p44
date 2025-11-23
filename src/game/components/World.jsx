import { Physics } from "@react-three/rapier";
import Player from "./Player";
import Ground from "./Ground";
import { Bvh } from "@react-three/drei";
import { useDebugStore } from "../store/DebugStore";

export default function World() {

  const { debug, toggleDebug } = useDebugStore();

  return (
    <Physics debug={debug}>
      <Player />
      
      <Bvh firstHitOnly>
        <Ground />
      </Bvh>
    </Physics>
  );
}
