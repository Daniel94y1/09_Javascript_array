import { calculateShopping, WISHES } from "./calculateShopping";

describe("calculateShopping", () => {
  test("should calculate the total cost correctly", () => {
    const result = calculateShopping(WISHES);
    expect(result).toBe(227005);
  });

  test("should throw an error for non-array input", () => {
    const invalidInput = "not an array";
    expect(() => calculateShopping(invalidInput)).toThrow(
      "Input must be an array"
    );
  });
});
