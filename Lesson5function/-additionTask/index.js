function getPrimes(num) {
  for (let i = 2; i <= num; i++) {
    for (let j = 1; j < i; j++) {
      if (i % j === 0) {
        console.log(i);
      }
    }
  }
}
