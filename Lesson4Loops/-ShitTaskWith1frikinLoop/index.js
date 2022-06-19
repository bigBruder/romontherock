let start = 1;
let end = 10;
let result = 0;

for (let i = start; i <= 10; i++) {
  if (i % 5 === 0) {
    console.log(i);
  } else if (i % 2 === 0 && i % 4 !== 0) {
    result += i;
  } else if (i % 3 === 0) {
    result -= i;
  } else if (i % 4 === 0) {
    result *= i;
  }
}
