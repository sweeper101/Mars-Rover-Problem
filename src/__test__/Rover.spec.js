// function to describe the possible movements for rover
describe("Unit Movement Of Rover Tests", () => {
  //Spinleft;
  test("Spin Left test", () => {
    expect(SpinLeft("N")).toBe("W");
    expect(SpinLeft("E")).toBe("N");
  });
});
