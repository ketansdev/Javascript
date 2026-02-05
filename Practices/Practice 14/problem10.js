// Question 10 (last of this set)

// Write a function that removes duplicate values from an object
// 👉 Keep only the first occurrence of each value.

let data = {
  a: 1,
  b: 2,
  c: 1,
  d: "x",
  e: "x",
  f: true,
  g: true,
};

const removeDuplicateVal = function (obj) {
  let arr = [];
  let newObj = {};
  for (let key in obj) {
    if(!arr.includes(obj[key])){
        arr.push(obj[key]);
        newObj[key] = obj[key]
    }
    
  }
  return newObj;
};

let result = removeDuplicateVal(data);
console.log(result);
