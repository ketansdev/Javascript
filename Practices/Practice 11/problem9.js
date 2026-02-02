// Question 9️⃣: Update Nested Values by a Factor
// Task

// Write a function updateNestedValues(obj, factor) that:
// Multiplies all number values in nested objects by factor
// Returns a new object with updated nested values

let student = {
  name: "Rahul",
  marks: {
    math: 80,
    eng: 95,
    sci: 90,
  },
  age: 21,
};

let factor = 2;

const updateNestedValues = function (obj, factor) {
  let newObj = { ...obj };

  for (let key in newObj) {
    if (typeof newObj[key] === "object") {
      for (let innerKey in newObj[key]) {
        if (typeof newObj[key][innerKey] === "number") {
          newObj[key][innerKey] = newObj[key][innerKey] * factor;
        }
      }
    }
  }
  return newObj;
};

let result = updateNestedValues(student, factor);
console.log(result);
