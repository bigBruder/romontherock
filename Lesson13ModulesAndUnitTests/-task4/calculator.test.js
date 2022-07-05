import { calc } from "./calculator.js";

it("should get sum of numbers", () => {
  const result = calc("10 + 10");
  expect(result).toEqual("10 + 10 = 20");
});
it("should get difference of numbers", () => {
  const result = calc("10 - 10");
  expect(result).toEqual("10 - 10 = 0");
});

it("should get multiplication of numbers", () => {
  const result = calc("10 * 10");
  expect(result).toEqual("10 * 10 = 100");
});

it("should get division of numbers", () => {
  const result = calc("10 / 10");
  expect(result).toEqual("10 / 10 = 1");
});

it("should get null", () => {
  const result = calc(10 + 10);
  expect(result).toEqual(null);
});
