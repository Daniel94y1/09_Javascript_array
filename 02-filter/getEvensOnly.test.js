import { getEvensOnly, COUNTERS } from "./getEvensOnly";

describe("getEvensOnly", () => {
  test("returns a new array with even numbers using filter", () => {
    const result = getEvensOnly(COUNTERS);
    const expected = [2, 12, 42, 28];

    expect(result).toEqual(expected);
  });
});
