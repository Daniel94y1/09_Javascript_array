/**
 * Given MATES array, define function 'capitalizeMates' to return an array of strings with capitalized names
 *
 * expected: ["John", "Jacob", "Jingleheimer", "Schmidt"]
 */

const MATES = ["john", "JACOB", "jinGleHeimer", "schmidt"];

const capitalizeMates = function (MATES) {
  const matesCapitalLetter = MATES.map((element) => {
    const firstCharacter = element.charAt(0).toUpperCase();
    const restOfString = element.slice(1).toLowerCase();
    return `${firstCharacter}${restOfString}`;
  });

  return matesCapitalLetter;
};

export default capitalizeMates;
