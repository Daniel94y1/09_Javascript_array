import { sumNumbersFromInitialValue } from "./sumNumbersFromInitialValue";

describe("sumNumbersFromInitialValue", () => {
  test("returns the sum value with initial value as 0", () => {
    const result = sumNumbersFromInitialValue(0);
    expect(result).toBe(15);
  });

  test("returns the sum value with initial value as 10", () => {
    const result = sumNumbersFromInitialValue(10);
    expect(result).toBe(25);
  });
});
