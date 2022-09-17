const parseUser = (str) => {
  try {
    const user = JSON.parse(str);
    console.log(user);
  } catch (e) {
    return null;
  }
  return JSON.parse(str);
};

const str = '{"name": Roman", "age": "17"}';
parseUser(str);
