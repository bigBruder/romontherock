const btnElem = document.querySelector(".btn").textContent;

const text = btnElem.textContent;
console.log(text);
const handleClick = (event) => {
  console.log(event.btnElem);
};

btnElem.addEventListener("click", handleClick);
btnElem.addEventListener("click", handleClick);
