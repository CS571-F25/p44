import { Physics } from "@react-three/rapier";
import Player from "./Player";
import Ground from "./Ground";
import { Bvh, KeyboardControls } from "@react-three/drei";
import { useDebugStore } from "../store/DebugStore";
import { keyboardMap } from "../core/Controls";

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
