// Question 10 

// Problem:
// Write a function that checks whether an object has duplicate values.

// Rules

// Return true if any value appears more than once
// Otherwise return false
// Works for numbers and strings

let data = {
  a: 1,
  b: 2,
  c: 1,
  d: "x",
  e: "x"
};

const checkDuplicates = function(obj){
    let arr = [];
        for(let key in obj){
            if(arr.includes(obj[key])){
                return true;
            }
            arr.push(obj[key]);     
        }
        return false;
}

let result = checkDuplicates(data);
console.log(result);