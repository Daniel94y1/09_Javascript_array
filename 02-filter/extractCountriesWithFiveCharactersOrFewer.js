/**
 * Given COUNTRIES array, define function 'extractCountriesWithFiveCharactersOrFewer' return a new array that only includes those countries that are 5 characters or fewer in length.
 *
 * expected: [ 'Italy' ]
 */

export const COUNTRIES = [
  "United Kingdom",
  "Italy",
  "France",
  "Portugal",
  "Greece",
];

export function extractCountriesWithFiveCharactersOrFewer(countriesArray) {
  return countriesArray.filter((country) => country.length <= 5);
}
