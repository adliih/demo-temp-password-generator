import { getAlphabetMappingByEmail } from ".";

describe("Alphabet mapping of email", () => {
  it("should only create map from the letter present in email", () => {
    const email = "ikhsan@jakpat.net";
    const expectedMapping = {
      0: "@",
      9: "I",
      11: "K",
      8: "H",
      19: "S",
      1: "A",
      14: "N",
      10: "J",
      16: "P",
      20: "T",
      5: "E",
    };

    expect(getAlphabetMappingByEmail(email)).toEqual(expectedMapping);
  });
});
