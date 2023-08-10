import { getAlphabetMappingByEmail } from ".";

describe("Alphabet mapping of email", () => {
  it("should only create map from the letter present in email", () => {
    const email = "ikhsan@jakpat.net";
    const expectedMapping = {
      "@": 0,
      i: 9,
      k: 11,
      h: 8,
      s: 19,
      a: 1,
      n: 14,
      j: 10,
      p: 16,
      t: 20,
      e: 5,
    };

    expect(getAlphabetMappingByEmail(email)).toEqual(expectedMapping);
  });
});
