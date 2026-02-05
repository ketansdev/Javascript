// Question 1

// Write a function that counts how many properties in an object have values of type object.

// Rules

// Count only values whose type is "object"
// null should NOT be counted
// Return the count (number)

let data = {
  name: "Rahul",
  marks: { math: 80, sci: 90 },
  address: { city: "Mumbai" },
  age: 21,
  extra: null,
};

const countObjectType = function (obj) {
  let count = 0;

  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      count++;
    }
  }
  return count;
};

let result = countObjectType(data);
console.log(result);
