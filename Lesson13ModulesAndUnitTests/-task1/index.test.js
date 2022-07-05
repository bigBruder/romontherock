/* eslint-disable no-unused-expressions */
it("17 the same 17", () => {
  expect(17).toEqual(17);
});

it("18 isn't the same 17", () => {
  expect(18).not.toEqual(17);
});
function getEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}
it("should get only even numbers from array", () => {
  const result = getEvenNumbers([1, 2, 3, 4]);
  expect(result).toEqual([2, 4]);
});
