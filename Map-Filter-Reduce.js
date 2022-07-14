var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
console.log("Map");
console.log(numbers.map((x) => x * 2));

//Filter - Create a new array by keeping the items that return true.

//--Using forEach Loop--
// const a = [];
// numbers.forEach((n) => {
//   if (n > 10) {
//     return a.push(n);
//   }
// });
// console.log(a);
console.log("Filtetr");

console.log(numbers.filter((n) => n > 10));

//Reduce - Accumulate a value by doing something to each item in an array.
console.log("Reduce");

console.log(numbers.reduce((accumulator,currentNumber)=> accumulator+currentNumber));

//Find - find the first item that matches from an array.
console.log("Find");

console.log(numbers.find(n=>n>10));

//FindIndex - find the index of the first item that matches.
console.log("FindIndex");

console.log(numbers.findIndex(n=>n>10));
