// const vehicle = {
//   move() {
//     console.log(`${this.name} is moving`);
//   },
//   stop() {
//     console.log(`${this.name} is stopped`);
//   },
// };

// const ship = {
//   name: "Argo",
//   startMachine() {
//     console.log(`${this.name} lifting anchor up`);
//     ship.move();
//   },
//   stopMachine() {
//     ship.stop();
//     console.log(`${this.name} lifting anchor down`);
//   },
// };

// Object.setPrototypeOf(ship, vehicle);

// const getOwnProps = (ship) =>
//   Object.keys(ship).filter((key) => typeof ship[key] !== "function");

export function User(name, age) {
  this.name = name;
  this.age = age;
}
User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};
User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};
// eslint-disable-next-line consistent-return
User.prototype.setAge = function (age) {
  this.age = age;
  if (age < 0) {
    return false;
  }
  if (age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  }
  if (age >= 0) {
    return age;
  }
};
