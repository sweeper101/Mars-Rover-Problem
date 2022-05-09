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
