const submitBtnElem = document.querySelector(".submit-button");
const formElem = document.querySelector(".login-form");
const isValid = formElem.reportValidity();

const baseUrl =
  "https://62e1a704e8ad6b66d84db2d8.mockapi.io/5f565b3ec0a34aac866092b1c93a4809";

const createData = (userData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  });
};

const onButtonClick = (e) => {
  e.preventDefault();
  if (isValid) {
    submitBtnElem.removeAttribute("disabled");
  }
  const formData = () => Object.fromEntries(new FormData(formElem));
  return formData;
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const formData = () => Object.fromEntries(new FormData(formElem));
  createData(formData)
    .then((response) => response.json())
    .then((result) => alert(JSON.stringify(result)))
    .then(() => formElem.reset());
};
formElem.addEventListener("input", onButtonClick);
submitBtnElem.addEventListener("submit", onFormSubmit);

// const emailErrorElem = document.querySelector(".error-text_email");
// const passwordErrorElem = document.querySelector(".error-text_password");

// const isRequired = (value) => (value ? undefined : "Required");
// const isEmail = (value) =>
//   value.includes("@") ? undefined : "Should be an email";

// const onEmailChange = (event) => {
//   const errorText = [isRequired, isEmail]
//     .map((validator) => validator(event.target.value))
//     .filter((errorText) => errorText)
//     .join(", ");
//   emailErrorElem.textContent = errorText;
// };
// const onPasswordChange = (event) => {
//   const errorText = [isRequired]
//     .map((validator) => validator(event.target.value))
//     .filter((errorText) => errorText)
//     .join(", ");
//   passwordErrorElem.textContent = errorText;
// };

// emailInputElem.addEventListener("input", onEmailChange);
// passwordInputElem.addEventListener("input", onPasswordChange);

// 1. Prepare data
// 2. Write data to dataBase
// 3. Read new data from the server
// 4. Save new data to fromt-end storage
// 5. Update UI based on a new data
