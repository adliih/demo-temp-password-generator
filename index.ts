const alphabetDictionary: Record<string, number> = {
  "@": 0,
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

export function getAlphabetMappingByEmail(
  email: string
): Record<string, number> {
  return (
    email
      .replace(".", "")
      .split("")
      // create a mapping of letter and it's numeric representative
      .map((c) => ({ [c]: alphabetDictionary[c] }))
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
