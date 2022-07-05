// 5555notworking

const squareArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map((currentNumber) => currentNumber * currentNumber);
};

// 6666

function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.filter((num) => num % 2 === 0).map((num) => num + delta);
}
// 7777
function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.slice();
}
//  8888

// 99999
let sum = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const initialValue = 0;
  let sumOfArray = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  return sumOfArray;
};

// 10FIILTEER
function filterNames(arr, text) {
  return arr.filter((elem) => elem.includes(text) && elem.length > 5);
}
//  theLastOne
function arrAverage(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const initialValue = 0;
  let sumOfArray = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  return sumOfArray / arr.length;
}
