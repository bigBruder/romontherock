export function saveFuncCalls(func) {
  const argOfArray = [];
  function memory(...arg) {
    argOfArray.push(arg);
    return func.apply(this, arg);
  }
  memory.callsHistory = argOfArray;
  return memory;
}
// example 3
// const user = {
//   name: "John",
//   sayHi() {
//     return this.name;
//   },
// };

// const sayHiWithMemory = saveFuncCalls(user.sayHi);
// // sayHiWithMemory(); // ===> throw error // because sayHiWithMemory lost context
// const sayHiWithMemoryBinded = sayHiWithMemory.bind({ name: "Tom" });
// console.log(sayHiWithMemoryBinded()); // ===> Tom // because we fixed context with bind and run functon again

// console.log(sayHiWithMemory.callsHistory); // [ [] ]
