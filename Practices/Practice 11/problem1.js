// Question 1️⃣: Count Truthy Values in Object
// Task

// Write a function countTruthyValues(obj) that:
// Counts how many truthy values are present in an object
// Returns the count

let data = {
  name: "Rahul",
  age: 0,
  city: "",
  marks: 85,
  passed: false,
  rank: null
};


const countTruthyValues = function(obj){
    let count = 0;

    for(let key in obj){
        console.log(obj[key]);
        if(obj[key]){
            count++;
        }
    }
    return count;
}

let result = countTruthyValues(data);
console.log(result);