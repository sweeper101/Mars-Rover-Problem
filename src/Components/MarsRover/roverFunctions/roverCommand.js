import SpinLeft from "./SpinLeft";
import SpinRight from "./SpinRight";
import StepForward from "./StepForward";

//@gridSize -
//@initial - position of rover
//@command -
export default function roverCommand(gridSize, intial, command) {
  const [maxX, maxY] = gridSize;
  let finalPosition;
  let [x, y, z] = intial;
  const obj = {
    L: (z = SpinLeft(z)),
    R: (z = SpinRight(z)),
    M: ([x, y, z] = StepForward(x, y, z)),
  };
  const arrCommand = command.split("");

  if (x <= maxX && x >= 0) {
    if (y <= maxY && y >= 0) {
      arrCommand.forEach((element) => {
        finalPosition = obj[element];
      });
    } else {
      console.log("error y value is out of bounds");
    }
  } else {
    console.log("error x value is out of bounds");
  }
  return finalPosition;
}
