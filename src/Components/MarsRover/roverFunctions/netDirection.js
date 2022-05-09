import SpinLeft from "./SpinLeft";
import SpinRight from "./SpinRight";

//@iniitial - represents initial direction
//@ total_L - represents total left input
//@ total_R - represents total left input
export default function netDirection(intial, total_L, total_R) {
  let direction = intial;

  for (let index = 0; index < total_L; index++) {
    direction = SpinLeft(direction);
  }
  for (let index = 0; index < total_R; index++) {
    direction = SpinRight(direction);
  }

  return direction;
}
