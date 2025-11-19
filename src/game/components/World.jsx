import { Physics } from "@react-three/rapier";
import Player from "./Player";
import Ground from "./Ground";

export default function World() {
  return (
    <Physics debug={false}>
      <Player />
      <Ground />
    </Physics>
  );
}
