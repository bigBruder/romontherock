export function getMinSquaredNumber(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const num = Math.min(...arr.map((num) => Math.abs(num)));
  return num * num;
}

// ---test Data
// arr = ["-777, 3, -2, 6, 45, -20"];
// console.log(getMinSquaredNumber(arr));
