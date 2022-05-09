// SpinRight direction
// 4 possible directions for Spin Right
export default function SpinRight(direction) {
  const obj = {
    N: "E",
    W: "N",
    S: "W",
    E: "S",
  };
  return obj[direction];
}
