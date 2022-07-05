// copy with assign method

const players = Object.assign(obj1, obj2);

// spread operator

const copyObj = (obj) => {
  const user = { ...user };
  return user;
};

// destructuring object
const { name = "default", ...restProps } = user;
