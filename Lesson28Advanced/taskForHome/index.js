export /* eslint-disable default-case */
const shmoment = (initialValue) => {
  let result = new Date(initialValue);
  return {
    add(value, number) {
      switch (value) {
        case "years":
          result.setFullYear(result.getFullYear() + number);
          return this;
        case "months":
          result.setMonth(result.getMonth() + number);
          return this;
        case "days":
          result.setDate(result.getDate() + number);
          return this;
        case "hours":
          result.setHours(result.getHours() + number);
          return this;
        case "minutes":
          result.setMinutes(result.getMinutes() + number);
          return this;
        case "seconds":
          result.setSeconds(result.getSeconds() + number);
          return this;
        case "milliseconds":
          result.setMilliseconds(result.getMilliseconds() + number);
          return this;
          break;
      }
      return result;
    },
    subtract(value, number) {
      switch (value) {
        case "years":
          result.setFullYear(result.getFullYear() - number);
          return this;
        case "months":
          result.setMonth(result.getMonth() - number);
          return this;

        case "days":
          result.setDate(result.getDate() - number);
          return this;

        case "hours":
          result.setHours(result.getHours() - number);
          return this;

        case "minutes":
          result.setMinutes(result.getMinutes() - number);
          return this;

        case "seconds":
          result.setSeconds(result.getSeconds() - number);
          return this;

        case "milliseconds":
          result.setMilliseconds(result.getMilliseconds() - number);
          return this;

          break;
      }
      return result;
    },
    result() {
      return result;
    },
  };
};
// console.log(
//   shmoment(new Date(2022, 7, 20, 13, 25, 57))
//     .subtract("months", 3)
//     .subtract("months", 3)
//     .result()
// );
