const alphabetDictionary: Record<string, number> = {
  "@": 0,
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26,
};

export function getAlphabetMappingByEmail(
  email: string
): Record<number, string> {
  return (
    email
      .replace(".", "")
      .toUpperCase()
      .split("")
      // create a mapping of letter and it's numeric representative
      .map((c) => ({ [alphabetDictionary[c]]: c }))
      // merge all of that
      .reduce((prev, current) => {
        prev = {
          ...prev,
          ...current,
        };
        return prev;
      }, {})
  );
}

export function convertToAlphabet(
  alphabetMapping: Record<number, string>,
  value: number
): string {
  const exactResult = alphabetMapping[value];
  if (!exactResult) {
    return findNearestResult(alphabetMapping, value);
  }
  return exactResult;
}

function findNearestResult(
  alphabetMapping: Record<number, string>,
  value: number
): string {
  const keys = Object.keys(alphabetMapping)
    .map((key) => parseInt(key))
    .sort();

  let nearestKey = 0;
  let prevDistance = Infinity;
  // find the nearest key from the value parameter that exist
  for (const key of keys) {
    const distance = Math.abs(value - key);
    if (distance >= prevDistance) {
      continue;
    }

    prevDistance = distance;
    nearestKey = key;
  }

  return alphabetMapping[nearestKey];
}
