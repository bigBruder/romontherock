const btnElem = document.querySelector(".btn");

const handleClick = (event) => {
  console.log(event.btnElem.textContent);

  btnElem.addEventListener("click", handleClick);
  btnElem.addEventListener("click", handleClick);
};
