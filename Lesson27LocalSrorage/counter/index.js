const containerElem = document.querySelector(".container");

const valueElem = document.querySelector(".value");

const changeValueFunc = (e) => {
  const isButton = e.target.classList.contains("button");
  if (!isButton) {
    return;
  }

  const data = e.target.dataset.action;

  const value = +valueElem.textContent;

  const newValue = data === "decrease" ? value - 1 : value + 1;

  localStorage.setItem("containerElem", newValue);

  // eslint-disable-next-line no-cond-assign
  valueElem.textContent = newValue;
};

containerElem.addEventListener("click", changeValueFunc);

const storageChange = (even) => {
  valueElem.textContent = even.newValue;
};

window.addEventListener("storage", storageChange);

const onDocumentLoaded = () => {
  valueElem.textContent = localStorage.getItem("counterValue") || 0;
};

document.addEventListener("DOMContentLoaded", onDocumentLoaded);
