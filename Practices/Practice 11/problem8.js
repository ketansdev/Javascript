// Question 8️⃣: Get All Nested Values as Array
// Task

// Write a function getAllNestedValues(obj) that:
// Accepts an object like the student object
// Returns an array of all values inside all nested objects


let student = {
  name: "Rahul",
  marks: {
    math: 80,
    eng: 95,
    sci: 90
  },
  age: 21
};

const getAllNestedValues = function(obj){
    let arr = [];

    for(let key in obj){
        if(typeof obj[key] === "object"){
            for(let innerKey in obj[key]){
                arr.push(obj[key][innerKey]);
            }
        }
    }
    return arr;
}

let result = getAllNestedValues(student);
console.log(result);