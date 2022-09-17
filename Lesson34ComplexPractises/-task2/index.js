const submitBtnElem = document.querySelector(".submit-button");
const formElem = document.querySelector(".login-form");

const baseUrl = "https://62e1a704e8ad6b66d84db2d8.mockapi.io/api/v1/users";

const createUser = (userData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  }).then((response) => {
    formElem.reset();
    submitBtnElem.setAttribute("disabled", "");
    return response.json();
  });
};

const onFormSubmit = () => {
  const formData = Object.fromEntries(new FormData(formElem));
  createUser(formData).then((response) => alert(JSON.stringify(response)));
};

const resetDefault = (e) => {
  e.preventDefault();
};
formElem.addEventListener("submit", resetDefault);

const onButtonClick = () => {
  const isValid = formElem.reportValidity();
  if (!isValid) {
    return;
  }
  submitBtnElem.removeAttribute("disabled");
  submitBtnElem.addEventListener("click", onFormSubmit);
};

formElem.addEventListener("input", onButtonClick);
