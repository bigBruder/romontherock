const shmoment = (initialValue) => {
  let result = new Date(initialValue);
  const calculator = {
    add(value, number) {
      let finishValue;
      if (value === "years") {
        finishValue = result.setFullYear(result.getFullYear() + number);
      } else if (value === "months") {
        finishValue = result.setMonth(result.getMonth() + number);
      } else if (value === "days") {
        finishValue = result.setDate(result.getDate() + number);
      } else if (value === "hours") {
        finishValue = result.setHours(result.getHours() + number);
      } else if (value === "minutes") {
        finishValue = result.setMinutes(result.getMinutes() + number);
      } else if (value === "seconds") {
        finishValue = result.setSeconds(result.getSeconds() + number);
      } else if (value === "milliseconds") {
        finishValue = result.setMilliseconds(result.getMilliseconds() + number);
      }
      result = +finishValue;
      return this;
    },
    subtract(value, number) {
      let finishValue;
      if (value === "years") {
        finishValue = result.setFullYear(result.getFullYear() - number);
      } else if (value === "months") {
        finishValue = result.setMonth(result.getMonth() - number);
      } else if (value === "days") {
        finishValue = result.setDate(result.getDate() - number);
      } else if (value === "hours") {
        finishValue = result.setHours(result.getHours() - number);
      } else if (value === "minutes") {
        finishValue = result.setMinutes(result.getMinutes() - number);
      } else if (value === "seconds") {
        finishValue = result.setSeconds(result.getSeconds() - number);
      } else if (value === "milliseconds") {
        finishValue = result.setMilliseconds(result.getMilliseconds() - number);
      }
      result += finishValue;
      return this;
    },
    result() {
      return new Date(result);
    },
  };
  return calculator;
};
console.log(
  shmoment(new Date(2022, 7, 20, 13, 25, 57)).subtract("months", 3).result()
);
