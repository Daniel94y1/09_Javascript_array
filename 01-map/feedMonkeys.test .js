import feedMonkeys from "./feedMonkeys.js";

describe("Given feedMonkeys", () => {
  test("when 🍌 is provided as an argument, then the expected array should be returned", () => {
    const fruit = "🍌";
    const expectedResult = ["🐒 🍌", "🦍 🍌", "🦧 🍌"];

    const monkeys = feedMonkeys(fruit);

    expect(monkeys).toBeDefined();
    expect(monkeys.length).toBe(3);
    expect(monkeys).toEqual(expectedResult);
  });

  test("when 🍎 is provided as an argument, then the expected array should be returned", () => {
    const fruit = "🍎";
    const expectedResult = ["🐒 🍎", "🦍 🍎", "🦧 🍎"];

    const monkeys = feedMonkeys(fruit);

    expect(monkeys).toBeDefined();
    expect(monkeys.length).toBe(3);
    expect(monkeys).toEqual(expectedResult);
  });
});
