const divElem = document.querySelector(".rect_div");
const pElem = document.querySelector(".rect_p");
const spanElem = document.querySelector(".rect_span");

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

divElem.addEventListener("click", logGreyDiv, true);
divElem.addEventListener("click", logGreenDiv);

pElem.addEventListener("click", logGreyP, true);
pElem.addEventListener("click", logGreenP);

spanElem.addEventListener("click", logGreySpan, true);
spanElem.addEventListener("click", logGreenSpan);
