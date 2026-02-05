// Question 1

// Problem Statement:
// Write a function that takes an object and returns a new object containing only those properties whose values are not empty.

// Rules:

// Exclude values that are: null, undefined, "" (empty string)
// Keep 0 and false (they are valid values)
// Do not modify the original object


let data = {
  name: "Rahul",
  age: 0,
  city: "",
  marks: 85,
  passed: false,
  rank: null
};


const nonEmpty = function(obj){
    let newObj = {};
    for(let key in obj){
        if(obj[key] !== "" && obj[key] !=+ undefined & obj[key] !=+ null){
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

let result = nonEmpty(data);
console.log(result);