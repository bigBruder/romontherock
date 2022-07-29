import { fetchUserData, fetchRepositories } from "./gateWays.js";
import { renderUserData } from "./user.js";
import { renderRepos } from "./repos.js";
import { showSpinner, hiddenSpinner } from "./spinner.js";

const defaultUser = {
  avatar_url: "https://avatars3.githubusercontent.com/u10001",
  name: "",
  location: "",
};
renderUserData(defaultUser);

const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");
const listElem = document.querySelector(".repo-list");

const onSearchUser = () => {
  showSpinner();
  listElem.innerHTML = "";
  const userName = userNameInputElem.value;
  fetchUserData(userName)
    .then((userData) => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then((url) => fetchRepositories(url))
    .then((reposList) => renderRepos(reposList))
    .catch((err) => {
      hiddenSpinner();
      alert(err.message);
    });
};

showUserBtnElem.addEventListener("click", onSearchUser);
