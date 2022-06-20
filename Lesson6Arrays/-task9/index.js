function reverseArray(array) {
  let copyArr = array.slice();
  if (!Array.isArray(copyArr)) {
    return null;
  }
  return copyArr.reverse();
}