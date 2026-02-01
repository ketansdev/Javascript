// Question 9

// Write a function that checks whether all values in an object are numbers.

// Example:

// { a: 10, b: 20, c: 30 } → true
// { a: 10, b: "20", c: 30 } → false

const checkNumber = function (obj) {
  for (let key in obj) {
    if (typeof obj[key] !== "number") {
      return false;
    }
  }

  return true;
};

let result = checkNumber({ a: 10, b: "20", c: 30 });
console.log(result);
