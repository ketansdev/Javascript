// Question 6️⃣: Extract Nested Object Keys
// Task

// Write a function getNestedKeys(obj) that:
// Accepts an object with nested objects as values
// Returns an array of all keys in nested objects

let student = {
  name: "Rahul",
  marks: {
    math: 80,
    eng: 95,
    sci: 90
  },
  age: 21
};

// const getNestedKeys = function(obj){
//     let arr = [];
//     for(let key in obj.marks){
//         arr.push(key);
//     }
//     return arr;
// }

// let result = getNestedKeys(student);
// console.log(result);

const getNestedKeys = function(obj){
    let arr = [];
    for(let key in obj){
        console.log(typeof obj[key]);
        if(typeof obj[key] === "object"){
            for(let innerKey in obj[key]){
                arr.push(innerKey);
            }
        }
    }
    return arr;
}

let result = getNestedKeys(student);
console.log(result);