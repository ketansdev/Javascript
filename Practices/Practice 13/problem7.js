// Write a function that checks whether all numeric values in an object are even numbers.

// Rules

// Ignore non-numeric values
// If any numeric value is odd, return false
// If all numeric values are even, return true

let data = {
  a: 2,
  b: "hello",
  c: 6,
  d: true,
  e: 8,
};

const checkEvenNumeric = function (obj) {
  let oddVal = 0;
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      if (obj[key] % 2 !== 0) {
        oddVal++;
      }
    }
  }
  if (oddVal > 0) {
    return false;
  }
  return true;
};

let result = checkEvenNumeric(data);
console.log(result);
