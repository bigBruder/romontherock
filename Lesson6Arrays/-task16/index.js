function removeDuplicates(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (!arr.includes(array[i])) {
      arr.push(array[i]);
    }
  }
  return arr;
}
