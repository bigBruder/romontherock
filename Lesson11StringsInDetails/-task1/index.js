/* eslint-disable no-undef */
// const splitText = (text, len = 10) => {
//     if (typeof(text) !== 'string') {
//       return null;
//     }
//   const strArr = [];
//   let startPositon = 0;
//   while (true) {
//     let chunk = text.substr(startPositon, len);
//     if (chunk.length === 0) {
//       break;
//     }
//     strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
//     startPositon += len;
//   }
//   return strArr.join("\n");
// };

// console.log(splitText("abcd efgh", 4));

const countOccurrences = (text = "", str) => {
  if (str === "") {
    return null;
  }
  let startPositon = 0;
  let count = 0;
  while (true) {
    startPositon = text.indexOf(str, startPositon + 1);
    if (indexOf(str, startPositon + 1) === -1) {
      break;
    } else count++;
  }
  return count;
};

// const countOccurrences = (text = "", str) => {
//   if (str === "") {
//     return null;
//   }
//   let count = 0;
//   text.slice(0, indexOf(str));
//   return count;
// };

console.log(countOccurrences("text", "t"));

// string.split(word).length - 1;
