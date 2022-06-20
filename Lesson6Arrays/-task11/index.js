function checker(arr) {
  let copyArr = arr.slice();
  let max = Math.max.apply(null, copyArr);
  let min = Math.min.apply(null, copyArr);
  let sum = max + min;
  if (sum > 1000) {
    return true;
  }
  return false;
}