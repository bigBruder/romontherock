// Better ppractice with two stars

const superRound = (num, prec) => {
  const arr = [];
  arr.push(Math.floor(num * 10 ** prec) / 10 ** prec);
  arr.push(Math.trunc(num * 10 ** prec) / 10 ** prec);
  arr.push(Math.ceil(num * 10 ** prec) / 10 ** prec);
  arr.push(Math.round(num * 10 ** prec) / 10 ** prec);
  arr.push(+num.toFixed(prec));
  return arr;
};

// const superRound = (num, prec) => {
//     let arr = [];
//    arr.push(Math.floor(num * (Math.pow(10, prec)))/(Math.pow(10, prec)));
//    arr.push(Math.trunc(num * (Math.pow(10, prec)))/(Math.pow(10, prec)));
//    arr.push(Math.ceil(num * (Math.pow(10, prec)))/(Math.pow(10, prec)));;
//    arr.push(Math.round(num * (Math.pow(10, prec)))/(Math.pow(10, prec)));
//    arr.push(+num.toFixed(prec));
//   };
