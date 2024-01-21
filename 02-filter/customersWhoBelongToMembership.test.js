import {
  customersWhoBelongToMembership,
  CUSTOMERS,
} from "./customersWhoBelongToMembership";

describe("customersWhoBelongToMembership", () => {
  test("returns a new array filtered by membership using filter", () => {
    const result = customersWhoBelongToMembership(CUSTOMERS);
    const expected = [
      { name: "Foo", member: true },
      { name: "Fizz", member: true },
      { name: "FizzBuzz", member: true },
    ];

    expect(result).toEqual(expected);
  });
});
