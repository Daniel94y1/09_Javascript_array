/**
 * Given 'VALUES' array, define function 'getWordFromValues' to return a string of all those numbers.
 *
 * expected: '123'
 */

export const VALUES = [1, 2, 3];

export function getWordFromValues(valuesArray) {
  return valuesArray.reduce((word, value) => word + value, "");
}
