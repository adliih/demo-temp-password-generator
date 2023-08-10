import { getAlphabetMappingByEmail } from ".";

describe("Alphabet mapping of email", () => {
  it("should only create map from the letter present in email", () => {
    const email = "ikhsan@jakpat.net";
    const expectedMapping = {
      0: "@",
      9: "i",
      11: "k",
      8: "h",
      19: "s",
      1: "a",
      14: "n",
      10: "j",
      16: "p",
      20: "t",
      5: "e",
    };

    expect(getAlphabetMappingByEmail(email)).toEqual(expectedMapping);
  });
});
