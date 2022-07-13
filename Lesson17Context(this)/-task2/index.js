const student = {
  name: "Tom",
};
function sayName() {
  console.log(this.name);
}
const sayStudentName = sayName.bind(student);
console.log(sayStudentName());

kolyan
const student2 = {
  name: "Bruce",
};
function sayName() {
  console.log(this.name);
}
const sayBruceName = sayName.bind(student2);
console.log(sayBruceName());
