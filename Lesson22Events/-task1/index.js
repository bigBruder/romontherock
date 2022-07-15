const btnElem1 = document.querySelector(".btn");
const btnElem2 = document.querySelector(".btn");
const handleClick = (event) => {
  console.log(event.btnElem.textContent);
};
btnElem1.addEventListener("click", handleClick);
btnElem2.addEventListener("click", handleClick);
