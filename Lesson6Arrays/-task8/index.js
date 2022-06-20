const increaseEvenEl = (arr, delta) => {
    let array =[];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
     array.push(arr[i] + delta);
    } else {
      array.push(arr[i] );
    }
  }
  return array
};
