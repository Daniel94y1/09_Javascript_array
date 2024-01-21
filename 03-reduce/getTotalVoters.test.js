import { VOTERS } from "./getTotalVoters";
import getTotalVoters from "./getTotalVoters";

describe("getTotalVoters", () => {
  test("returns the total number of voters", () => {
    const result = getTotalVoters(VOTERS);
    expect(result).toBe(7);
  });
});
