const submitBtnElem = document.querySelector(".submit-button");
const formElem = document.querySelector(".login-form");
const isValid = formElem.reportValidity();

const url = "https://62e0303a98dd9c9df60f6e25.mockapi.io/api/v1/users";

function createUser(userData) {
  return fetch(url, {
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
}

function getFormData() {
  const formData = Object.fromEntries(new FormData(formElem));
  createUser(formData).then((data) => {
    alert(JSON.stringify(data));
  });
}

function submitForm(event) {
  event.preventDefault();
}
formElem.addEventListener("submit", submitForm);

function checkValidity() {
  const isValid = formElem.reportValidity();
  if (!isValid) {
    return;
  }
  submitBtnElem.removeAttribute("disabled");
  submitBtnElem.addEventListener("click", getFormData);
}
formElem.addEventListener("input", checkValidity);

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
