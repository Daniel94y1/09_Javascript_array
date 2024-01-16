import transformSecondsToWords from "./transformSecondsToWords";

describe("Given transformSecondsToWords", () => {
  test("when [2, 5, 100] is provided as argument, the expected array should be returned", () => {
    const SECONDS = [2, 5, 100];
    const expectedResult = ["2", "5", "100"];

    const newWord = transformSecondsToWords(SECONDS);

    expect(newWord).toBeDefined();
    expect(newWord.length).toBe(3);
    expect(newWord).toEqual(expectedResult);
  });
});
