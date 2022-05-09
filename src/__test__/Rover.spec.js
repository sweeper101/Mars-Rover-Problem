import SpinLeft from "../Components/MarsRover/roverFunctions/SpinLeft";
import SpinRight from "../Components/MarsRover/roverFunctions/SpinRight";
import StepForward from "../Components/MarsRover/roverFunctions/StepForward";
// function to describe the possible movements for rover
describe("Unit Movement Of Rover Tests", () => {
  //Spinleft;
  test("Spin Left test", () => {
    expect(SpinLeft("N")).toBe("W");

    expect(SpinLeft("E")).toBe("N");
  });

  //SpinRight;
  test("SpinRight", () => {
    expect(SpinRight("N")).toBe("E");
    expect(SpinRight("W")).toBe("N");
  });

  //StepForward;
  test("StepForward", () => {
    expect(StepForward(1, 1, "N")).toStrictEqual([1, 2, "N"]);

    expect(StepForward(1, 1, "W")).toStrictEqual([0, 1, "W"]);
    expect(StepForward(4, 1, "S")).toStrictEqual([4, 0, "S"]);
  });
});

// function to describe the net direction and movement for rover
describe("Net Calculations Of Rover", () => {
  //Net Direction;
  test("Net Direction", () => {
    expect(netDirection("N", 2, 1)).toBe("W");
  });

  //Net netMovement;
  test("Net Movement", () => {
    expect(netMovement([1, 2, "N"], 5)).toStrictEqual([1, 7, "N"]);
  });
});

// function to describing the final output for rover
describe("total movement of rover", () => {
  test("movement", () => {
    expect(roverCommand([5, 5], [1, 2, "N"], "LMLMLMLMM")).toStrictEqual([
      1,
      3,
      "N",
    ]);
  });
});
