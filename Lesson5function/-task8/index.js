function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  let sum1 = 0;
  let sum2 = 0;
  function sum(from, to) {
    for (let i = firstFrom; i <= firstTo; i++) {
      sum1 += i;
    }
    return sum1;
  }
  for (let j = secondFrom; j <= secondTo; j++) {
    sum2 += i;
  }
  if (sum > sum2) {
    return true;
  }
  return false;
}
