function uniqueCount(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let uniq = new Set(array);
  console.log(uniq);
  return uniq.size;
}