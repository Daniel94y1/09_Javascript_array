import { getWordFromValues, VALUES } from "./getWordFromValues";

describe("getWordFromValues", () => {
  test("returns a string of all the numbers", () => {
    const result = getWordFromValues(VALUES);
    expect(result).toBe("123");
  });
});
