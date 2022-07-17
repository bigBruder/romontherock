// function finishForm() {
//   const input1 = document.querySelector("input");
//   input1.type = "password";
//   const input2 = document.createElement("input");
//   input2.setAttribute("type", "text");
//   input2.setAttribute("name", "login");
//   const input = document.querySelector(".login-form");
//   input.prepend(input2);
// }
// console.log(finishForm());

// function squaredNumbers() {
//  const listItems = Array.from(document.querySelectorAll("li"));
//  listItems.forEach( el => {
//     const squared = el.dataset.number * el.dataset.number;
//     el.dataset.squaredNumber = squared;
//  });
// }

//   const numbers = document.querySelector(".number");
//   const number = +Object.values(numbers.dataset);
//   const squaredNumber = number * number;
//   listItems.setAttribute("data-squared-number", "");
//   document.querySelectorAll(".number");
// console.log(squaredNumbers());

// function finishList() {
//   const listItems = document.querySelector(".list");
//   const listItemsSpecial = document.querySelector(".special");

//   const listItem1 = document.createElement("li");
//   listItem1.textContent = "1";
//   listItems.prepend(listItem1);

//   const listItem8 = document.createElement("li");
//   listItem8.textContent = "8";
//   listItems.append(listItem8);

//   const listItem4 = document.createElement("li");
//   listItem4.textContent = "4";
//   listItemsSpecial.before(listItem4);

//   const listItem6 = document.createElement("li");
//   listItem6.textContent = "6";
//   listItemsSpecial.after(listItem6);
// }

// console.log(finishList());
let setTitle = (text) => {
  document.querySelector(".title").textContent = text;
};

console.log(setTitle("fs"));
