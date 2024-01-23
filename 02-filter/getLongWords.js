/**
 * Given 'WORDS' array, define function 'getLongWords' to return an array only with strings with length equal or greater then 5
 * use for() instruction
 *
 * expected LANGUAGES: ['JavaScript', 'TypeScript']
 * expected BEATLES: ["George", "Ringo"];
 */

export const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
export const BEATLES = ["John", "George", "Paul", "Ringo"];

export function getLongWords(wordsArray) {
  return wordsArray.filter((word) => word.length >= 5);
}
