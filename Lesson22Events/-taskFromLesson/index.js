
document.addEventListener("DOMContentLoaded", () => {
  logTargetAdd();
});


const eventsLstElem = document.querySelector(".events-list");
const divElem = document.querySelector(".rect_div");
const pElem = document.querySelector(".rect_p");
const spanElem = document.querySelector(".rect_span");
const clear = document.querySelector(".clear-btn");
const removeHandlers = document.querySelector(".remove-handlers-btn");
const handlers = document.querySelector(".attach-handlers-btn");

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
  divElem.addEventListener("click", logGreenDiv);
  divElem.addEventListener("click", logGreyDiv, { capture: true });
  pElem.addEventListener("click", logGreenP);
  pElem.addEventListener("click", logGreyP, true);
  spanElem.addEventListener("click", logGreenSpan);
  spanElem.addEventListener("click", logGreySpan, true);
};

const logTargetRemove = () => {
  divElem.removeEventListener("click", logGreenDiv);
  pElem.removeEventListener("click", logGreenP);
  spanElem.removeEventListener("click", logGreenSpan);

  divElem.removeEventListener("click", logGreyDiv, true);
  pElem.removeEventListener("click", logGreyP, true);
  spanElem.removeEventListener("click", logGreySpan, true);
};

clear.addEventListener("click", logTargetEmpty);
removeHandlers.addEventListener("click", logTargetRemove);
handlers.addEventListener("click", logTargetAdd);


