export function getItemsList() {
  const elementsList = document.querySelectorAll(".technology");
  console.dir(elementsList);
  return elementsList;
}

export function getItemsArray() {
  const elementsList = Array.from(document.querySelectorAll(".tool"));
  console.dir(elementsList);
  return elementsList;
}

getItemsList();
getItemsArray();
