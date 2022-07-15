const divElem = document.querySelector(".rect_div");
const pElem = document.querySelector(".rect_p");
const spanElem = document.querySelector(".rect_span");

const clear = document.querySelector(".clear-btn");
const handlers = document.querySelector(".attach-handlers-btn");
const removeHandlers = document.querySelector(".remove-handlers-btn");

const LogTargetEmpty = () => {
  const eventsLstElem = document.querySelector(".events-list");

  eventsLstElem.innerHTML = "";
};

const LogTarget = (text, color) => {
  const eventsLstElem = document.querySelector(".events-list");

  eventsLstElem.innerHTML += `<span style='color: ${color}; margin-left: 8px;'>${text}<span>`;
};

const logGreyDiv = LogTarget.bind(null, "div", "grey");
const logGreyP = LogTarget.bind(null, "p", "grey");
const logGreySpan = LogTarget.bind(null, "span", "grey");

const logGreenDiv = LogTarget.bind(null, "div", "green");
const logGreenP = LogTarget.bind(null, "p", "green");
const logGreenSpan = LogTarget.bind(null, "span", "green");

const LogTargetAdd = () => {
  divElem.addEventListener("click", logGreyDiv, true);
  divElem.addEventListener("click", logGreenDiv);

  pElem.addEventListener("click", logGreyP, true);
  pElem.addEventListener("click", logGreenP);

  spanElem.addEventListener("click", logGreySpan, true);
  spanElem.addEventListener("click", logGreenSpan);
};

const LogTargetRemove = () => {
  divElem.removeEventListener("click", logGreyDiv, true);
  divElem.removeEventListener("click", logGreenDiv);

  pElem.removeEventListener("click", logGreyP, true);
  pElem.removeEventListener("click", logGreenP);

  spanElem.removeEventListener("click", logGreySpan, true);
  spanElem.removeEventListener("click", logGreenSpan);
};

clear.addEventListener("click", LogTargetEmpty);
handlers.addEventListener("click", LogTargetAdd);
removeHandlers.addEventListener("click", LogTargetRemove);
LogTargetAdd();
