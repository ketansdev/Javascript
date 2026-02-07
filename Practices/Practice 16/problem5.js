// Create a new object where:

// If value is a number → include it only if it is greater than the sum of all OTHER numeric values
// If value is a string → include it only if it contains at least 2 vowels
// Ignore all other types

let data = {
  a: 10,
  b: 5,
  c: 20,
  name: "Rahul",
  city: "Mumbai",
  code: "xyz",
  passed: true,
};

// const filterObject = function (obj) {
//   let sum = 0;
//   let otherSum = 0;
//   let newObj = {};
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       sum += obj[key];
//     }
//   }

//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       otherSum = sum - obj[key];

//       if (obj[key] > otherSum) {
//         newObj[key] = obj[key];
//       }
//     }
//   }

//   for (let key in obj) {
//     if (typeof obj[key] === "string") {
//       for (let i = 0; i < obj[key]; i++) {
//         if (
//           obj[key].toLowerCase().includes("a") ||
//           obj[key].toLowerCase().includes("e") ||
//           obj[key].toLowerCase().includes("i") ||
//           obj[key].toLowerCase().includes("o") ||
//           obj[key].toLowerCase().includes("u")
//         ) {
//           newObj[key] = obj[key];
//         }
//       }
//     }
//   }
//   return newObj;
// };

// let result = filterObject(data);
// console.log(result);
