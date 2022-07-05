import getSum, {
  getDifference,
  getMultiplication,
  getDivision,
} from "./calculator.js";

it("should get sum of numbers", () => {
  const result = getSum(10, 10);
  expect(result).toEqual(20);
});
it("should get difference of numbers", () => {
  const result = getDifference(10, 10);
  expect(result).toEqual(0);
});

it("should get multiplication of numbers", () => {
  const result = getMultiplication(10, 10);
  expect(result).toEqual(100);
});

it("should get division of numbers", () => {
  const result = getDivision(10, 10);
  expect(result).toEqual(1);
});
