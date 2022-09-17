export const fetchUserData = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error("Failed to load data");
  });
};

export const fetchRepositories = (url) =>
  fetch(url).then((response) => response.json());

// async(not working)

// const response = await fetch(`https://api.github.com/users/${userName}`);
// if (response.ok) {
//   return await response.json();
// }
// throw new Error("Failed to load data");
// };

// export const fetchRepositories = async (url) => {
// const result = await fetch(url);
// if (result.ok) {
//   return await result.json();
// }
// throw new Error("Failed to load data");
// };
