const { calculator } = require("../src/exercise");

describe("calculator", () => {
  test("should throw an error(exception) if inputs are not numbers", () => {
    expect(() => {
      calculator("a", 1, "+");
    }).toThrow();
    
    expect(() => {
      calculator(1, "a", "+");
    }).toThrow();
  });

  test("should add number1 to number2 then return the result", () => {
    const result = calculator(10, 5, "+");
    expect(result).toBe(15);
  });

  test("should subtract number2 from number1 then return the result", () => {
    const result = calculator(10, 5, "-");
    expect(result).toBe(5);
  });

  test("should multiply number1 to number2 then return the result", () => {
    const result = calculator(10, 5, "*");
    expect(result).toBe(50);
  });

  test("should divide number1 from number2 then return the result", () => {
    const result = calculator(10, 5, "/");
    expect(result).toBe(2);
  });

  test("should return an object with a message if invalid operator is passed", () => {
    const result = calculator(10, 5, "a");
    expect(result).toMatchObject({ message: "invalid operator!" });
    expect(result.success).toBeFalsy();
  });
});
