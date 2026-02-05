// Question 7 

// Problem:
// Write a function that returns an array of keys whose values are numbers.

let data = {
  name: "Rahul",
  age: 21,
  marks: 85,
  city: "Mumbai",
  rank: 2,
  passed: true
};


const arrayOfKeysWithNumbers = function(obj){
    let arr = [];
    for(let key in obj){
        if(typeof obj[key] === "number"){
            arr.push(key);
        }
    }
    return arr;
}

let result = arrayOfKeysWithNumbers(data);
console.log(result);