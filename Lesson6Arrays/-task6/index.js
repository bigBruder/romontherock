function squareArray(arr) {
  let array = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    array.push(arr[i] * arr[i]);
  }
  return array;
}
