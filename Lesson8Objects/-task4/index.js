/* eslint-disable no-restricted-syntax */
const pickProps = (obj, props) => {
  let user = {};
  for (let key in obj) {
    if (props.includes(key)) {
      user[key] = obj[key];
      console.log(obj[key]);
    }
  }
  return user;
};
console.log();

// console.log(pickProps({ a: 1, b: 2, c: 3 }, ["a", "c"]));

const getAdults = (obj) => {
  obj === { "John Doe": 19, Tom: 17, Bob: 18 };
  const adults = {};
  for (let value in obj) {
    if (obj[value] >= 18) {
      console.log(obj[value]);
      adults[value] = obj[value];
    }
  }
  return adults;
};
// console.log(getAdults({ "John Doe": 19, Tom: 17, Bob: 18 }));
