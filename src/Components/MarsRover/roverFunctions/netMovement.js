import StepForward from "./StepForward";

//@iniitial - represents initial position
//@ total_M - represents total M input
export default function netMovement(init, total_M) {
  let [x, y, z] = init;

  let position = [x, y, z];

  for (let index = 0; index < total_M; index++) {
    position = StepForward(position[0], position[1], position[2]);
  }

  return position;
}
