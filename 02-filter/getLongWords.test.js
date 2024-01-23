import { getLongWords, LANGUAGES, BEATLES } from "./getLongWords";

describe("getLongWords", () => {
  test("returns an array with words of length 5 or greater using filter", () => {
    const resultLanguages = getLongWords(LANGUAGES);
    const expectedLanguages = ["JavaScript", "TypeScript"];
    expect(resultLanguages).toEqual(expectedLanguages);

    const resultBeatles = getLongWords(BEATLES);
    const expectedBeatles = ["George", "Ringo"];
    expect(resultBeatles).toEqual(expectedBeatles);
  });
});
