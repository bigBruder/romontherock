const getSum = (numbers) =>
  numbers.Promise.filter((value) => !isNaN(value)).reduce(
    (acc, number) => acc + Number(number),
    0
  );

const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers)
    .then((numbers) => getSum(numbers))
    .catch(() => Promise.reject(new Error("Can't calculate")));
};
