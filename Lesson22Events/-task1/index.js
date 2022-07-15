const btnElem = document.querySelector(".btn").textContent;

const handleClick = (event) => {
  console.log(event.btnElem);
};

btnElem.addEventListener("click", handleClick);
btnElem.addEventListener("click", handleClick);

handleClick(event);
