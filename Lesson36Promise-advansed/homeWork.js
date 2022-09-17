const gitUrl = "https://api.github.com/users";
const getUsersBlogs = async (users) => {
  const responses = users.map((user) =>
    fetch(`${gitUrl}/${user}`).then((response) => response.json())
  );
  console.log(responses);
  const usersData = await Promise.all(responses);
  return usersData.map((data) => data.blog);
};

getUsersBlogs(["google", "facebook", "reactjs"]).then((linksList) =>
  console.log(linksList)
);
// test Data
// getUsersBlogs(["microsoft"]).then((linksList) => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
