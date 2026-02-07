// Create a new object where each key is kept only if:

// its value is a number
// AND the number is greater than the average of all numeric values in the object

let data = {
  math: 80,
  eng: 45,
  sci: 90,
  history: 60,
  city: "Mumbai",
  passed: true,
};

const filterObject = function (obj) {
  let newObj = {};
  let sum = 0;
  let avg = 0;
  let count = 0;

  for (let key in obj) {
    if (typeof obj[key] === "number") {
      count++;
      sum += obj[key];
    }
  }
  avg = sum / count;
  for (let key in obj) {
    if (typeof obj[key] === "number" && obj[key] > avg) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

let result = filterObject(data);
console.log(result);
