// algo
// 1. realise addition of tasks to done by checkbox, so list have be updated
// 2. realise button Create - create new task and add to the list by click button, then clear input field
// 2.1 take text from the input field
// 2.2 event - add it to the list by click
// 2.3 add field into the empty string
// 3. done tasks have be under the actually tasks

const randomFunc = () => Math.random().toString(10).substring(2, 9);

const tasks = [
  {
    text: "Buy milk",
    done: false,
    id: randomFunc(),
  },
  {
    text: "Pick up Tom from airport",
    done: false,
    id: randomFunc(),
  },
  {
    text: "Visit party",
    done: false,
    id: randomFunc(),
  },
  {
    text: "Visit doctor",
    done: true,
    id: randomFunc(),
  },
  {
    text: "Buy meat",
    done: true,
    id: randomFunc(),
  },
];

const listElem = document.querySelector(".list");
const renderTasks = (taskList) => {
  const tasksElems = taskList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.dataset.id = id;
      checkbox.checked = done;
      checkbox.classList.add("list__item-checkbox");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const inputElem = document.querySelector(".task-input");
const createBtn = document.querySelector(".create-task-btn");

const handler = () => {
  const inputValue = inputElem.value;
  if (inputValue.length === 0) {
    return;
  }
  tasks.push({
    text: inputValue,
    done: false,
    id: randomFunc(),
  });
  inputElem.value = "";
  listElem.innerHTML = "";
  renderTasks(tasks);
};

createBtn.addEventListener("click", handler);

const changeClass = (event) => {
  const checkedElem = event.target.classList.contains("list__item-checkbox");
  if (!checkedElem) {
    return;
  }
  const checkboxId = event.target.dataset.id;
  tasks.forEach((el) => {
    if (+el.id === +checkboxId && el.done === false) {
      el.done = true;
    } else if (+el.id === +checkboxId && el.done === true) {
      el.done = false;
    }
  });
  listElem.innerHTML = "";
  renderTasks(tasks);
};
listElem.addEventListener("click", changeClass);

// const handler = (event) => {
//   console.log(event.target.value);
//   tasks.push({ text: event.target.value, done: false });
//   inputElem.textContent = "";
//   renderTasks(tasks);
// };
