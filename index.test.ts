import {
  convertToAlphabet,
  generateUniqueTempPassword,
  getAlphabetMappingByEmail,
} from ".";

describe("Alphabet mapping of email", () => {
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

  it("should only create map from the letter present in email", () => {
    const email = "ikhsan@jakpat.net";

    expect(getAlphabetMappingByEmail(email)).toEqual(expectedMapping);
  });

  it("should strip out non letters", () => {
    const email = "ikhsan-1234.124@jakpat.net";

    expect(getAlphabetMappingByEmail(email)).toEqual(expectedMapping);
  });
});

describe("convert to alphabet", () => {
  const alphabetMapping = {
    0: "@",
    1: "A",
    5: "E",
    8: "H",
    9: "I",
    10: "J",
    11: "K",
    14: "N",
    16: "P",
    19: "S",
    20: "T",
  };
  it.each([
    {
      input: 1,
      expected: "A",
    },
    {
      input: 9,
      expected: "I",
    },
    {
      input: 8,
      expected: "H",
    },
    {
      input: 0,
      expected: "@",
    },
  ])(
    "should return $expected value if the $input is exist in the mapping",
    ({ input, expected }) => {
      expect(convertToAlphabet(alphabetMapping, input)).toBe(expected);
    }
  );

  it.each([
    {
      input: 2,
      expected: "a",
    },
    {
      input: 7,
      expected: "h",
    },
    {
      input: 15,
      expected: "n",
    },
  ])(
    "should return nearest value $expected if the $input is not exist in the mapping",
    ({ input, expected }) => {
      expect(convertToAlphabet(alphabetMapping, input)).toBe(expected);
    }
  );
});

describe("generate unique temp password", () => {
  it.each([
    {
      email: "superadmin@jakpat.net",
      date: "2001-10-31",
      expected: "a@@AJu",
    },
    {
      email: "ikhsan@jakpat.net",
      date: "1980-07-15",
      expected: "AIH@hn",
    },
  ])(
    "should convert $email and $date into $expected",
    ({ email, date, expected }) => {
      expect(generateUniqueTempPassword(email, date)).toBe(expected);
    }
  );
});
