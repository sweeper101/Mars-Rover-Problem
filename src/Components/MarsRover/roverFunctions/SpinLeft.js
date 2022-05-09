// SpinLeft functions
// 4 possible directions for Spin Left
export default function SpinLeft(direction) {
  const obj = {
    N: "W",
    W: "S",
    S: "E",
    E: "N",
  };

  return obj[direction];
}
