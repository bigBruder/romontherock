const eventsLstElem = document.querySelector(".events-list");
const divElem = document.querySelector(".rect_div");
const pElem = document.querySelector(".rect_p");
const spanElem = document.querySelector(".rect_span");
const clearBtn = document.querySelector(".clear-btn");
const removeHandlersBtn = document.querySelector(".remove-handlers-btn");
const handlersBtn = document.querySelector(".attach-handlers-btn");

const logTarget = (text, color) => {
  eventsLstElem.innerHTML += `<span style='color: ${color}; margin-left: 8px;'>${text}<span>`;
};

const logTargetEmpty = () => {
  eventsLstElem.innerHTML = "";
};

const logGreenDiv = logTarget.bind(null, "div", "green");
const logGreyDiv = logTarget.bind(null, "div", "grey");
const logGreenP = logTarget.bind(null, "p", "green");
const logGreyP = logTarget.bind(null, "p", "grey");
const logGreenSpan = logTarget.bind(null, "span", "green");
const logGreySpan = logTarget.bind(null, "span", "grey");

const logTargetAdd = () => {
  divElem.addEventListener("click", logGreyDiv, true);
  divElem.addEventListener("click", logGreenDiv);
  pElem.addEventListener("click", logGreyP, true);
  pElem.addEventListener("click", logGreenP);
  spanElem.addEventListener("click", logGreySpan, true);
  spanElem.addEventListener("click", logGreenSpan);
};

const logTargetRemove = () => {
  divElem.removeEventListener("click", logGreenDiv);
  pElem.removeEventListener("click", logGreenP);
  spanElem.removeEventListener("click", logGreenSpan);

  divElem.removeEventListener("click", logGreyDiv, true);
  pElem.removeEventListener("click", logGreyP, true);
  spanElem.removeEventListener("click", logGreySpan, true);
};

clearBtn.addEventListener("click", logTargetEmpty);
removeHandlersBtn.addEventListener("click", logTargetRemove);
handlersBtn.addEventListener("click", logTargetAdd);

document.addEventListener("DOMContentLoaded", () => {
  logTargetAdd();
});
