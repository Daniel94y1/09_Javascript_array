/**
 * Given 'NUMBERS' array, define function 'sumNumbersFromInitialValue' to return its sum value depending on initial value.
 * use for() instruction
 *
 * expected with initial as 0: 15
 * expected with initial as 10: 25
 */

export const NUMBERS = [1, 2, 3, 4, 5];

export function sumNumbersFromInitialValue(initialValue) {
  return NUMBERS.reduce((sum, number) => sum + number, initialValue);
}
