function createArrayOfFunctions(num) {
  if (num !== undefined && typeof num !== "number") {
    return null;
  }
  if (num === undefined) {
    return [];
  }
  const array = [];
  for (let i = 0; i < num; i += 1) {
    array.push(function () {
      return i;
    });
  }

  return array;
}

console.log(createArrayOfFunctions(undefined));
