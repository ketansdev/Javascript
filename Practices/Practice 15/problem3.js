// Write a function that counts how many numeric values exist, including inside nested objects, but ignore arrays completely.

let data = {
  a: 10,
  b: {
    x: 5,
    y: "hi",
    z: {
      p: 3,
    },
  },
  c: [1, 2, 3],
  d: "hello",
  e: {
    m: 7,
  },
};

const countNumericValues = function (obj) {
  let count = 0;
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      count++;
    } else if (typeof obj[key] === "object" && ! Array.isArray(obj[key]) && obj[key] !== null) {
        count += countNumericValues(obj[key]);
    }
  }
  return count;
};

let result = countNumericValues(data);
console.log(result);
