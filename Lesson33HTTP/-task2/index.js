const baseUrl = "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks";

function getTasksList() {
  return fetch(`${baseUrl}`).then((response) => response.json());
}

function getTaskById(taskId) {
  return fetch(`${baseUrl}/${taskId}`).then((response) => response.json());
}

getTasksList().then((tasksList) => {
  console.log(tasksList);
});
