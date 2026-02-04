// Write a function that returns an array of keys whose values are either null or undefined.

// Rules

// Check only for null and undefined
// Do not include other falsy values like 0, "", or false

let data = {
  name: "Rahul",
  age: null,
  city: "Mumbai",
  score: undefined,
  passed: false,
  rank: null
};

const checkNullAndUndefined = function(obj){
    let arr = [];
    for(let key in obj){
        if(obj[key] === null || obj[key] === undefined){
            arr.push(key);
        }
    }
    return arr;
}

let result = checkNullAndUndefined(data);
console.log(result);