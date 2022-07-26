const requestUserData = (userId) => {
  const request = new Promise((resolved, reject) => {
    if (userId === "broken") {
      setTimeout(() => {
        reject(new Error("User not found"));
      }, 500);
    } else
      setTimeout(() => {
        resolved({
          name: "John",
          age: 17,
          userId: `${userId}`,
          email: `${userId}@example.com`,
        });
      }, 1000);
  });
  return request;
};
