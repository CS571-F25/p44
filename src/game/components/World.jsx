import { Physics } from "@react-three/rapier";
import Player from "./Player";
import Ground from "./Ground";
import { Bvh } from "@react-three/drei";

export default function World() {
  return (
    <Physics debug={true}>
      <Player />
      
      <Bvh firstHitOnly>
        <Ground />
      </Bvh>
    </Physics>
  );
}
