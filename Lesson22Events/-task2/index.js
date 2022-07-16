const button = document.querySelector(".single-use-btn");

const click = () => {
  console.log("clicked");
  button.removeEventListener("click", clickBtn);
};
const clickBtn = click.bind(null);
button.addEventListener("click", clickBtn);
