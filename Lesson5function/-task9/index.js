/* eslint-disable no-undef */
function findDivCount(a, b, n) {
  for (let i = a; i <= b; i++) {
    let count = 0;
    if (i % n === 0) {
      count++;
    }
  }
  return count;
}
