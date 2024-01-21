import createLocalesSettings from "./createLocalesSettings";

describe("createLocalesSettings", () => {
  test("returns the expected locales configuration", () => {
    const localesArray = ["EN", "GR", "FR", "IT", "PT"];

    const result = createLocalesSettings(localesArray);

    expect(result).toEqual({
      EN: { id: 0, enabled: true },
      GR: { id: 1, enabled: false },
      FR: { id: 2, enabled: false },
      IT: { id: 3, enabled: false },
      PT: { id: 4, enabled: false },
    });
  });
});
