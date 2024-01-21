import {
  extractCountriesWithFiveCharactersOrFewer,
  COUNTRIES,
} from "./extractCountriesWithFiveCharactersOrFewer";

describe("extractCountriesWithFiveCharactersOrFewer", () => {
  test("returns a new array with countries of five characters or fewer using filter", () => {
    const result = extractCountriesWithFiveCharactersOrFewer(COUNTRIES);
    const expected = ["Italy"];

    expect(result).toEqual(expected);
  });
});
