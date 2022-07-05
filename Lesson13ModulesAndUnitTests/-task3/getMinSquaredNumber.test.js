import { getMinSquaredNumber } from "./getMinSquaredNumber";

it("should return Infinity", () => {
  const result = getMinSquaredNumber([]);

  expect(result).toEqual(Infinity);
});
it("should return NaN", () => {
  const result = getMinSquaredNumber("fvsbd");

  expect(result).toEqual(null);
});
it("should return Infinity", () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);

  expect(result).toEqual(4);
});
